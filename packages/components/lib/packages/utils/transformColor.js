"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const getColor = (startColor, endColor, step) => {
  startColor = getColorArr(startColor);
  endColor = getColorArr(endColor);
  const stepR = (endColor[0] - startColor[0]) / step;
  const stepG = (endColor[1] - startColor[1]) / step;
  const stepB = (endColor[2] - startColor[2]) / step;
  const colorArr = [];
  for (let i = 0; i < step; i++) {
    const color = `rgb(${stepR * i + startColor[0]},${stepG * i + startColor[1]},${stepB * i + startColor[2]})`;
    colorArr.push(color);
  }
  return colorArr;
};
const getColorArr = (value) => {
  if (isRgba(value)) {
    return changeRgba(value);
  } else if (isHex(value)) {
    return changeHex(value);
  }
};
const isRgba = (value) => {
  return /^rgba?/.test(value);
};
const isHex = (value) => {
  return /^#/.test(value);
};
const changeHex = (hex) => {
  if (hex.length == 4)
    return [
      parseInt("0x" + hex.slice(1, 2).repeat(2)),
      parseInt("0x" + hex.slice(2, 3).repeat(2)),
      parseInt("0x" + hex.slice(3, 4).repeat(2))
    ];
  else if (hex.length == 7)
    return [parseInt("0x" + hex.slice(1, 3)), parseInt("0x" + hex.slice(3, 5)), parseInt("0x" + hex.slice(5, 7))];
  else
    alert("颜色错误");
};
const changeRgba = (color) => {
  const values = color.replace(/rgba?\(/, "").replace(/\)/, "").replace(/[\s+]/g, "").split(",");
  const a = parseFloat(values[3] || 1), r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255), g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255), b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
  const newColor = "#" + ("0" + r.toString(16)).slice(-2) + ("0" + g.toString(16)).slice(-2) + ("0" + b.toString(16)).slice(-2);
  return changeHex(newColor);
};
exports.changeHex = changeHex;
exports.changeRgba = changeRgba;
exports.getColor = getColor;
