const singleTon = function(classType) {
  let instance;
  return new Proxy(classType, {
    construct(target, args) {
      return instance ? instance : instance = new target(...args);
    }
  });
};
export {
  singleTon as default,
  singleTon
};
