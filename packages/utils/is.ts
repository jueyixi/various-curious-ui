export const isObject = (value) => {
	return value && Object.prototype.toString.call(value) === '[object Object]';
};

export const isArray = (value) => {
	return value && Object.prototype.toString.call(value) === '[object Array]';
};

export const isNumber = (value) => {
	return typeof value === 'number' && !isNaN(value);
};

export const toFixed = (value, num = 2) => {
	return value.toFixed(num) / 1;
};

// 获取对象类型
export const getType = (obj) => {
	const toString = Object.prototype.toString;
	const map = {
		'[object Boolean]': 'boolean', // 布尔
		'[object Number]': 'number', // 数字
		'[object String]': 'string', // 字符串
		'[object Function]': 'function', // 方法
		'[object Array]': 'array', // 数组
		'[object Date]': 'date', // 日期
		'[object RegExp]': 'regExp', // 正则
		'[object Undefined]': 'undefined', // undefined
		'[object Null]': 'null', // null
		'[object Object]': 'object', // 对象
	};
	if (obj instanceof Element) {
		return 'element'; // dom
	}
	return map[toString.call(obj)];
};
