import { defineComponent, useAttrs, warn, h } from "vue";
const _sfc_main = defineComponent({
  setup(__, context) {
    const slots = context.slots;
    const attrs = useAttrs();
    if (!slots.default) {
      warn("Partial has empty slot");
      return void 0;
    }
    const VNodes = slots.default();
    let defaultDom;
    let oldDom;
    for (let i = 0; i < VNodes.length; i++) {
      const VNode2 = VNodes[i];
      if (VNode2.type !== Symbol.for("v-cmt")) {
        defaultDom = VNode2;
        break;
      }
    }
    if (!defaultDom) {
      warn("is a empty nodeList!");
      return void 0;
    }
    while (defaultDom && typeof defaultDom.type === "symbol") {
      let index = 0;
      if (defaultDom.type === Symbol.for("v-txt")) {
        defaultDom = h("span", { ...attrs }, [defaultDom]);
        break;
      }
      while (defaultDom.type === Symbol.for("v-cmt") && index < oldDom.children.length) {
        defaultDom = oldDom.children[++index];
      }
      if (index === 0) {
        oldDom = defaultDom;
        defaultDom = defaultDom.children[0];
      }
    }
    if (!defaultDom) {
      warn("There are no available VNodes for partial");
      return;
    }
    return () => {
      return h(defaultDom, { ...attrs });
    };
  },
  name: "VcPartial"
});
export {
  _sfc_main as default
};
