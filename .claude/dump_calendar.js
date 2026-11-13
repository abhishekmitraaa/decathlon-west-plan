const vm = require('vm'), fs = require('fs');
const ctx = { window: {} }; ctx.window.window = ctx.window; vm.createContext(ctx);
for (const f of ['assets/js/data.js', 'assets/js/events27.js']) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx);
const W = ctx.window;
fs.writeFileSync(process.argv[2], JSON.stringify({ PL: W.PLANNER, PD: W.PLAN_DETAIL, sotm: W.DATA.puneSportOfMonth, spend: W.DATA.spend, hol: W.DATA.holidaysQ1, ev: W.EVENTS27 }, null, 1));
