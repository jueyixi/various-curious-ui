

/**
 *  一维数组转二维数组
 *  @param {Array} dataArray 原数组
 *  @param {Number} cols 转换后一维数组单元内数据个数
 *  @return {Array} list 倒计时秒数
 *  @return {Function} filterArrayTwoDimensional 一维数组转二维数组
 */
export const filterArrayTwoDimensional = (dataArray:Array<any>, cols = 7) => {
    const list:Array<any> = [];
    dataArray?.forEach((item, index) => {
        // 方法二
        const num = Math.floor(index / cols);
        if (list[num]) {
            list[num].push(item);
        } else {
            list[num] = [item];
        }
    });
    return list;
};

import {isNumber} from "./is"
// 根据类型判断是否需要加px
export const setValueByPx = (value: any, unit = "px") => {
    if (!value && value != 0) return '';
    if (value !== '100%' && (isNumber(value) || isNumber(Number(value)))) {
		return Number(value) + unit;
	} else {
		return value;
	}
}