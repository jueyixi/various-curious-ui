interface ZIndex {
    [propsName:string]:number
}
const zIndex: ZIndex = {};

export const useZIndex = (name: string) => {
    if (!zIndex[name]) {
        zIndex[name] = 0
    }
    const getIndex = () => {
        return zIndex[name]
    }
    const setIndex = () => {
        zIndex[name]++
    }
    return {
		getIndex,
		setIndex,
	};
}