/**
 * 获取css var颜色值
 * @param {*} key
 * @param {*} ele
 * @returns
 */
export const getSkin = (key: string, ele?: string) => {    
    const dom = ele ? document.querySelector(ele) : document.documentElement;    
	return dom ? getComputedStyle(dom)?.getPropertyValue(key) : "";
};
