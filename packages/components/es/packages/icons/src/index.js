import * as components from "./components.js";
import { default as default2 } from "./ArrowDown/index.js";
import { default as default3 } from "./ArrowUp/index.js";
import { default as default4 } from "./ArrowLeft/index.js";
import { default as default5 } from "./ArrowRight/index.js";
import { default as default6 } from "./Loading/index.js";
import { default as default7 } from "./Close/index.js";
const install = function(app) {
  Object.keys(components).forEach((key) => {
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });
  return app;
};
const index = {
  install
};
export {
  default2 as ArrowDown,
  default4 as ArrowLeft,
  default5 as ArrowRight,
  default3 as ArrowUp,
  default7 as Close,
  default6 as Loading,
  index as default,
  install
};
