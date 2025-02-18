"use strict";
const vue = require("vue");
const calendar = require("./calendar.js");
const calendarWeek_vue_vue_type_script_setup_true_lang = require("../CalendarWeek/calendarWeek.vue.js");
const calendarMonth_vue_vue_type_script_setup_true_lang = require("../CalendarMonth/calendarMonth.vue.js");
const calendarYear_vue_vue_type_script_setup_true_lang = require("../CalendarYear/calendarYear.vue.js");
require("../packages/hooks/useDayjs.js");
const useNS = require("../packages/hooks/useNS.js");
const dayjs_min = require("../node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/dayjs.min.js");
const calendar$1 = require("../packages/typings/calendar.js");
const _hoisted_1 = { class: "vc-calendar-header--title" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "VcCalendar",
    inheritAttrs: false
  },
  __name: "calendar",
  props: calendar.calendarProps,
  emits: calendar.calendarEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const calendarNS = useNS.useNS("calendar");
    const _ref = vue.ref();
    const componentName = vue.ref();
    const components = {
      week: calendarWeek_vue_vue_type_script_setup_true_lang,
      month: calendarMonth_vue_vue_type_script_setup_true_lang,
      year: calendarYear_vue_vue_type_script_setup_true_lang
    };
    const headerContent = vue.reactive({
      title: dayjs_min.default().format("YYYY年MM月"),
      currentText: "",
      prevText: "",
      nextText: ""
    });
    vue.watchEffect(() => {
      if (props.mode) {
        componentName.value = vue.markRaw(components[props.mode]);
        headerContent.currentText = props.currentText || calendar.CurrentText[props.mode];
        headerContent.prevText = props.prevText;
        headerContent.nextText = props.nextText;
      }
    });
    const calendarValue = vue.computed({
      get() {
        return props.value;
      },
      set(val) {
        emits("update:value", val);
      }
    });
    vue.provide(
      calendar$1.calendarContextKey,
      vue.reactive({
        headerContent,
        value: calendarValue
      })
    );
    const calendarClass = vue.computed(() => {
      return [
        calendarNS.namespace
      ];
    });
    const calendarHeaderClass = vue.computed(() => {
      return [
        calendarNS.setBlock("header")
      ];
    });
    const componentRef = vue.ref();
    const prev = () => {
      var _a;
      (_a = componentRef.value) == null ? void 0 : _a.prev();
    };
    const setToday = () => {
      var _a;
      (_a = componentRef.value) == null ? void 0 : _a.setToday();
    };
    const next = () => {
      var _a;
      (_a = componentRef.value) == null ? void 0 : _a.next();
    };
    const change = (appointDate) => {
      var _a;
      return (_a = componentRef.value) == null ? void 0 : _a.change(appointDate);
    };
    const setDate = (appointDate) => {
      var _a;
      return (_a = componentRef.value) == null ? void 0 : _a.setDate(appointDate);
    };
    const getSelectedData = () => {
      var _a;
      return (_a = componentRef.value) == null ? void 0 : _a.getSelectedData();
    };
    __expose({
      prev,
      setToday,
      setDate,
      next,
      change,
      getSelectedData
    });
    return (_ctx, _cache) => {
      const _component_vc_button = vue.resolveComponent("vc-button");
      const _component_vc_button_group = vue.resolveComponent("vc-button-group");
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(calendarClass.value),
        ref_key: "_ref",
        ref: _ref
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(calendarHeaderClass.value)
        }, [
          vue.renderSlot(_ctx.$slots, "header", { data: headerContent }, () => [
            vue.createElementVNode("span", _hoisted_1, [
              vue.renderSlot(_ctx.$slots, "title", {
                title: headerContent.title
              }, () => [
                vue.createTextVNode(vue.toDisplayString(headerContent.title), 1)
              ])
            ]),
            vue.createVNode(_component_vc_button_group, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_vc_button, {
                  prefixIcon: "ArrowLeft",
                  onClick: prev
                }, vue.createSlots({ _: 2 }, [
                  headerContent.prevText ? {
                    name: "default",
                    fn: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(headerContent.prevText), 1)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1024),
                vue.createVNode(_component_vc_button, { onClick: setToday }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(headerContent.currentText), 1)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_vc_button, {
                  suffixIcon: "ArrowRight",
                  onClick: next
                }, vue.createSlots({ _: 2 }, [
                  headerContent.nextText ? {
                    name: "default",
                    fn: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(headerContent.nextText), 1)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1024)
              ]),
              _: 1
            })
          ])
        ], 2),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(calendarNS).setBlock("wrap"))
        }, [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(componentName.value), vue.mergeProps(_ctx.$attrs, {
            ref_key: "componentRef",
            ref: componentRef
          }), vue.createSlots({ _: 2 }, [
            vue.renderList(Object.keys(_ctx.$slots), (item) => {
              return {
                name: item,
                fn: vue.withCtx((data) => [
                  vue.renderSlot(_ctx.$slots, item, vue.normalizeProps(vue.guardReactiveProps(data)))
                ])
              };
            })
          ]), 1040))
        ], 2)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
