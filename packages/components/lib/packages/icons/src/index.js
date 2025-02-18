"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const components = require("./components.js");
const index$1 = require("./ArrowDown/index.js");
const index$2 = require("./ArrowUp/index.js");
const index$3 = require("./ArrowLeft/index.js");
const index$4 = require("./ArrowRight/index.js");
const index$5 = require("./Loading/index.js");
const index$6 = require("./Close/index.js");
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
exports.ArrowDown = index$1;
exports.ArrowUp = index$2;
exports.ArrowLeft = index$3;
exports.ArrowRight = index$4;
exports.Loading = index$5;
exports.Close = index$6;
exports.default = index;
exports.install = install;
