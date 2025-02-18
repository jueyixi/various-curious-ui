import { defineComponent, ref, inject, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, createBlock, createCommentVNode, renderSlot } from "vue";
import { buttonProps, buttonEmits } from "./button.js";
import { buttonGroupContextKey } from "../ButtonGroup/buttonGroup.js";
import "../packages/hooks/useDayjs.js";
import { useNS } from "../packages/hooks/useNS.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcButton",
    inheritAttrs: true
  },
  __name: "button",
  props: {
    ...buttonProps
  },
  emits: { ...buttonEmits },
  setup(__props, { emit: __emit }) {
    const _ref = ref();
    const props = __props;
    const buttonGroupContext = inject(buttonGroupContextKey, void 0);
    const emits = __emit;
    const buttonNS = useNS("button");
    const buttonClass = computed(() => {
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
      const _component_vc_icon = resolveComponent("vc-icon");
      return openBlock(), createElementBlock("button", {
        ref_key: "_ref",
        ref: _ref,
        class: normalizeClass(buttonClass.value),
        disabled: props.disabled,
        type: props.nativeType,
        onClick: _cache[0] || (_cache[0] = ($event) => handleClick($event))
      }, [
        props.loading ? (openBlock(), createBlock(_component_vc_icon, {
          key: 0,
          name: "Loading"
        })) : createCommentVNode("", true),
        !props.loading && (_ctx.$slots.prefixIcon || props.prefixIcon) ? (openBlock(), createElementBlock("span", _hoisted_2, [
          _ctx.$slots.prefixIcon ? renderSlot(_ctx.$slots, "prefixIcon", { key: 0 }) : props.prefixIcon ? (openBlock(), createBlock(_component_vc_icon, {
            key: 1,
            name: props.prefixIcon
          }, null, 8, ["name"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true),
        !props.loading && (_ctx.$slots.suffixIcon || props.suffixIcon) ? (openBlock(), createElementBlock("span", _hoisted_4, [
          _ctx.$slots.suffixIcon ? renderSlot(_ctx.$slots, "suffixIcon", { key: 0 }) : props.suffixIcon ? (openBlock(), createBlock(_component_vc_icon, {
            key: 1,
            name: props.suffixIcon
          }, null, 8, ["name"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 10, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
