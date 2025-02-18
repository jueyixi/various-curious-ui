import { isNumber } from "./is.js";
const filterArrayTwoDimensional = (dataArray, cols = 7) => {
  const list = [];
  dataArray == null ? void 0 : dataArray.forEach((item, index) => {
    const num = Math.floor(index / cols);
    if (list[num]) {
      list[num].push(item);
    } else {
      list[num] = [item];
    }
  });
  return list;
};
const setValueByPx = (value, unit = "px") => {
  if (!value && value != 0)
    return "";
  if (value !== "100%" && (isNumber(value) || isNumber(Number(value)))) {
    return Number(value) + unit;
  } else {
    return value;
  }
};
export {
  filterArrayTwoDimensional,
  setValueByPx
};
