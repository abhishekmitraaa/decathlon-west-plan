# Instructions for Claude in this project

## Always read context.md first
`context.md` is the single source of truth: every number, date, source file, decision, user
preference and open question for the Decathlon West plan site. Read it at the start of every task
before changing anything.

## Always update context.md at the end of every task (no prompt needed)
At the end of every task, before your final reply, update `context.md` without being asked:
- Add every new piece of data the user gave you (numbers, dates, files, images, videos, links) to
  the right section, with its source.
- Add every new discovery (computed figures, discrepancies, things you checked).
- Add any new preference or instruction the user expressed to section 2.
- Add new open questions or discrepancies to section 5.
- Append one line to the change log (section 6) with the date and what changed.
- Update "Last updated". Never delete history; mark superseded facts as superseded.
- If a change touched assets/js/data.js or content.js, refresh the appendix tables too.

A Stop hook (`.claude/hooks/context_check.py`) enforces this: if context.md was not modified
during the turn, you are sent back once to update it.

## Working rules for this site
- Push to the repo after every change (the user says "push to reco" for this): commit with the
  Co-Authored-By trailer, push to `main`, confirm the Vercel deploy is READY.
- Bump the `?v=` version tag on script and CSS links in index.html whenever they change.
- Verify in a browser at 1440px and 390px: no console errors, no horizontal scroll.
- Keep numbers exact and sourced; flag discrepancies instead of silently changing source data.
