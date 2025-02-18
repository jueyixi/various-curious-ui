const zIndex = {};
const useZIndex = (name) => {
  if (!zIndex[name]) {
    zIndex[name] = 0;
  }
  const getIndex = () => {
    return zIndex[name];
  };
  const setIndex = () => {
    zIndex[name]++;
  };
  return {
    getIndex,
    setIndex
  };
};
export {
  useZIndex
};
