export const isObject = (value) => {
	return value && Object.prototype.toString.call(value) === '[object Object]';
};

export const isArray = (value) => {
	return value && Object.prototype.toString.call(value) === '[object Array]';
};

export const isString = (value) => {
	return value && Object.prototype.toString.call(value) === '[object String]';
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
	if (obj instanceof HTMLElement) {
		return 'element'; // dom
	}
	return map[toString.call(obj)];
};


export const isChinese = (text) => {
    return /[\u4e00-\u9fa5]/.test(text);
}
 
export const isEnglish = (text) => {
    return /^[a-zA-Z0-9 ]+$/.test(text);
}

// 判断字符串单位是否为px
export const isPxUnit = (text: any) => {
	let isPx = false
	if (getType(text) === 'string') {
		const lastStr = text.substring(text.length() - 2)
		isPx = lastStr == 'px';
	}
	return isPx;
}