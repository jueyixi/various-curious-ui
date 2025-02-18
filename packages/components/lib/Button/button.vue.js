"use strict";
const vue = require("vue");
const button = require("./button.js");
const buttonGroup = require("../ButtonGroup/buttonGroup.js");
require("../packages/hooks/useDayjs.js");
const useNS = require("../packages/hooks/useNS.js");
const _hoisted_1 = ["disabled", "type"];
const _hoisted_2 = {
  key: 1,
  class: "vc-button-icon"
};
const _hoisted_3 = { key: 2 };
const _hoisted_4 = {
  key: 3,
  class: "vc-button-icon"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "VcButton",
    inheritAttrs: true
  },
  __name: "button",
  props: {
    ...button.buttonProps
  },
  emits: { ...button.buttonEmits },
  setup(__props, { emit: __emit }) {
    const _ref = vue.ref();
    const props = __props;
    const buttonGroupContext = vue.inject(buttonGroup.buttonGroupContextKey, void 0);
    const emits = __emit;
    const buttonNS = useNS.useNS("button");
    const buttonClass = vue.computed(() => {
      const _type = (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || props.type;
      const _size = (buttonGroupContext == null ? void 0 : buttonGroupContext.size) || props.size;
      const _danger = (buttonGroupContext == null ? void 0 : buttonGroupContext.danger) || props.danger;
      return [
        buttonNS.namespace,
        buttonNS.setModifier(_size),
        buttonNS.setBlock(_type),
        buttonNS.is(props.link, "link"),
        buttonNS.is(props.text, "text"),
        buttonNS.is(props.shape),
        buttonNS.is(_danger, "danger"),
        buttonNS.is(props.ghost, "ghost"),
        buttonNS.is(props.disabled, "disabled"),
        buttonNS.is(props.loading, "loading")
      ];
    });
    const handleClick = (event) => {
      emits("click", event);
    };
    return (_ctx, _cache) => {
      const _component_vc_icon = vue.resolveComponent("vc-icon");
      return vue.openBlock(), vue.createElementBlock("button", {
        ref_key: "_ref",
        ref: _ref,
        class: vue.normalizeClass(buttonClass.value),
        disabled: props.disabled,
        type: props.nativeType,
        onClick: _cache[0] || (_cache[0] = ($event) => handleClick($event))
      }, [
        props.loading ? (vue.openBlock(), vue.createBlock(_component_vc_icon, {
          key: 0,
          name: "Loading"
        })) : vue.createCommentVNode("", true),
        !props.loading && (_ctx.$slots.prefixIcon || props.prefixIcon) ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
          _ctx.$slots.prefixIcon ? vue.renderSlot(_ctx.$slots, "prefixIcon", { key: 0 }) : props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_vc_icon, {
            key: 1,
            name: props.prefixIcon
          }, null, 8, ["name"])) : vue.createCommentVNode("", true)
        ])) : vue.createCommentVNode("", true),
        _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, [
          vue.renderSlot(_ctx.$slots, "default")
        ])) : vue.createCommentVNode("", true),
        !props.loading && (_ctx.$slots.suffixIcon || props.suffixIcon) ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4, [
          _ctx.$slots.suffixIcon ? vue.renderSlot(_ctx.$slots, "suffixIcon", { key: 0 }) : props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_vc_icon, {
            key: 1,
            name: props.suffixIcon
          }, null, 8, ["name"])) : vue.createCommentVNode("", true)
        ])) : vue.createCommentVNode("", true)
      ], 10, _hoisted_1);
    };
  }
});
module.exports = _sfc_main;
