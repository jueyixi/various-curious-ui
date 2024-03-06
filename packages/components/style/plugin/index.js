const getVar = function (...args) {
	const strList = Array.from(args.map((item) => item.value));
	const str = strList.join('-');
	return `var(--vc-${str})`;
};

const getClrVar = function (...args) {
	const strList = Array.from(args.map((item) => item.value));
	const str = strList.join('-');
	return `var(--vc-color-${str})`;
};
const setBlock = function (b) {
	return b.value;
};
const setBlockBlock = function (b1, b2) {
	return `${b1.value}-${b2.value}`;
};
const setBlockEle = function (b, e) {
	return `${b.value}__${e.value}`;
};
const setBlockModifier = function (b, m) {
	return `${b.value}--${m.value}`;
};

const is = function (s) {
	return `is-${s.value}`;
};

// eslint-disable-line
registerPlugin({
	install: (less, pluginManager, functions) => {
		functions.add('getVar', getVar);
		functions.add('getClrVar', getClrVar);
		functions.add('setBlock', setBlock);
		functions.add('setBlockBlock', setBlockBlock);
		functions.add('setBlockEle', setBlockEle);
		functions.add('setBlockModifier', setBlockModifier);
		functions.add('is', is);
	},
});
