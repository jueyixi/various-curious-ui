"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const defaultNS = "vc";
const statusPrefix = "is";
const useNS = function(name) {
  const namespace = `${defaultNS}-${name}`;
  const setBlock = (block) => {
    return block ? `${namespace}-${block}` : "";
  };
  const setEle = (element) => {
    return element ? `${namespace}__${element}` : "";
  };
  const setModifier = (modifier) => {
    return modifier ? `${namespace}--${modifier}` : "";
  };
  const setEleEle = (ele1, ele2) => {
    return ele1 && ele2 ? `${namespace}__${ele1}__${ele2}` : "";
  };
  const setBlockBlock = (block1, block2) => {
    return block1 && block2 ? `${namespace}-${block1}-${block2}` : "";
  };
  const setBlockEle = (block, element, flag) => {
    if (typeof flag === "boolean") {
      return block && element && flag ? `${namespace}-${block}__${element}` : "";
    }
    return block && element ? `${namespace}-${block}__${element}` : "";
  };
  const setBlockModifier = (block, modifier, flag) => {
    if (typeof flag === "boolean") {
      return block && modifier && flag ? `${namespace}-${block}--${modifier}` : "";
    }
    return block && modifier ? `${namespace}-${block}--${modifier}` : "";
  };
  const setEleModifier = (element, modifier, flag) => {
    if (typeof flag === "boolean") {
      return element && modifier && flag ? `${namespace}__${element}--${modifier}` : "";
    }
    return element && modifier ? `${namespace}__${element}--${modifier}` : "";
  };
  const is = (status, s) => {
    if (typeof status === "string") {
      if (typeof s === "boolean") {
        return s ? `${statusPrefix}-${status}` : "";
      }
      return `${statusPrefix}-${status}`;
    }
    if (typeof status === "boolean" && status) {
      return `${statusPrefix}-${s}`;
    }
    return "";
  };
  return {
    namespace,
    setBlock,
    setEle,
    setModifier,
    setBlockBlock,
    setEleEle,
    setBlockEle,
    setBlockModifier,
    setEleModifier,
    is
  };
};
exports.useNS = useNS;
