"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const components = require("./components.js");
const IndexManager = require("./packages/utils/IndexManager.js");
const index$1 = require("./AniNumber/index.js");
const index$2 = require("./Icon/index.js");
const index$3 = require("./Button/index.js");
const index$4 = require("./ButtonGroup/index.js");
const index$5 = require("./Calendar/index.js");
const index$6 = require("./CalendarWeek/index.js");
const index$7 = require("./CalendarMonth/index.js");
const index$8 = require("./CalendarYear/index.js");
const index$9 = require("./Progress/index.js");
const index$a = require("./Ring/index.js");
const index$b = require("./Circle/index.js");
const index$c = require("./Dashboard/index.js");
const index$d = require("./HorGridBar/index.js");
const index$e = require("./VerGridBar/index.js");
const index$f = require("./GridBar/index.js");
const index$g = require("./Partial/index.js");
const index$h = require("./Floating/index.js");
const index$i = require("./TimeLine/index.js");
const index$j = require("./ScrollBar/index.js");
const install = function(app, options) {
  Object.keys(components).forEach((key) => {
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });
  if (!options)
    return;
  const { zIndex = 2e3 } = options;
  new IndexManager.IndexManager(zIndex);
  return app;
};
const index = {
  install
};
exports.VcAniNumber = index$1;
exports.VcIcon = index$2;
exports.VcButton = index$3;
exports.VcButtonGroup = index$4;
exports.VcCalendar = index$5;
exports.VcCalendarWeek = index$6;
exports.VcCalendarMonth = index$7;
exports.VcCalendarYear = index$8;
exports.VcProgress = index$9;
exports.VcRing = index$a;
exports.VcCircle = index$b;
exports.VcDashboard = index$c;
exports.VcHorGridBar = index$d;
exports.VcVerGridBar = index$e;
exports.VcGridBar = index$f;
exports.VcPartial = index$g;
exports.VcFloating = index$h;
exports.VcTimeLine = index$i;
exports.VcScrollBar = index$j;
exports.default = index;
exports.install = install;
