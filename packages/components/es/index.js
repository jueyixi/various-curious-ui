import * as components from "./components.js";
import { IndexManager } from "./packages/utils/IndexManager.js";
import { default as default2 } from "./AniNumber/index.js";
import { default as default3 } from "./Icon/index.js";
import { default as default4 } from "./Button/index.js";
import { default as default5 } from "./ButtonGroup/index.js";
import { default as default6 } from "./Calendar/index.js";
import { default as default7 } from "./CalendarWeek/index.js";
import { default as default8 } from "./CalendarMonth/index.js";
import { default as default9 } from "./CalendarYear/index.js";
import { default as default10 } from "./Progress/index.js";
import { default as default11 } from "./Ring/index.js";
import { default as default12 } from "./Circle/index.js";
import { default as default13 } from "./Dashboard/index.js";
import { default as default14 } from "./HorGridBar/index.js";
import { default as default15 } from "./VerGridBar/index.js";
import { default as default16 } from "./GridBar/index.js";
import { default as default17 } from "./Partial/index.js";
import { default as default18 } from "./Floating/index.js";
import { default as default19 } from "./TimeLine/index.js";
import { default as default20 } from "./ScrollBar/index.js";
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
  new IndexManager(zIndex);
  return app;
};
const index = {
  install
};
export {
  default2 as VcAniNumber,
  default4 as VcButton,
  default5 as VcButtonGroup,
  default6 as VcCalendar,
  default8 as VcCalendarMonth,
  default7 as VcCalendarWeek,
  default9 as VcCalendarYear,
  default12 as VcCircle,
  default13 as VcDashboard,
  default18 as VcFloating,
  default16 as VcGridBar,
  default14 as VcHorGridBar,
  default3 as VcIcon,
  default17 as VcPartial,
  default10 as VcProgress,
  default11 as VcRing,
  default20 as VcScrollBar,
  default19 as VcTimeLine,
  default15 as VcVerGridBar,
  index as default,
  install
};
