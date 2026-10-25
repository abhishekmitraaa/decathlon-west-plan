"""Make sure context.md is updated in every turn.

UserPromptSubmit: records when the turn started.
Stop: if context.md was not modified since then, block once and ask Claude to update it.
The stop_hook_active flag prevents a loop: Claude is only sent back once per turn.
"""
import json, os, sys, time

ROOT = os.environ.get("CLAUDE_PROJECT_DIR") or os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
STAMP = os.path.join(ROOT, ".claude", "hooks", ".turn_start")
CONTEXT = os.path.join(ROOT, "context.md")

mode = sys.argv[1] if len(sys.argv) > 1 else ""
try:
    payload = json.load(sys.stdin)
except Exception:
    payload = {}

if mode == "start":
    with open(STAMP, "w") as f:
        f.write(str(time.time()))
    sys.exit(0)

if mode == "stop":
    if payload.get("stop_hook_active"):
        sys.exit(0)
    try:
        started = float(open(STAMP).read().strip())
    except Exception:
        sys.exit(0)  # no turn start recorded; nothing to enforce
    updated = os.path.exists(CONTEXT) and os.path.getmtime(CONTEXT) >= started
    if not updated:
        print(json.dumps({
            "decision": "block",
            "reason": "context.md was not updated in this turn. Before finishing, update context.md as CLAUDE.md "
                      "describes: add every new number, file, discovery, preference and open question from this turn, "
                      "append a change-log line, and update 'Last updated'. If this turn truly added nothing new, "
                      "add a one-line change-log entry saying so."
        }))
    sys.exit(0)
