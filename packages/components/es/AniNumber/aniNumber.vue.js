import { defineComponent, ref, watch, onMounted, openBlock, createElementBlock, toDisplayString } from "vue";
import { aniNumberProps, aniNumberEmits } from "./aniNumber.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcAniNumber",
    inheritAttrs: false
  },
  __name: "aniNumber",
  props: aniNumberProps,
  emits: aniNumberEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const defaultValue = ref(0);
    const aniNumRef = ref();
    let startTime = performance.now();
    let finishTime = void 0;
    let aniNum = props.initial;
    const play = () => {
      const current = performance.now();
      if (props.step) {
        aniNum = aniNum + props.step;
        const minValue = Math.min(aniNum, props.value);
        defaultValue.value = Number(minValue).toFixed(props.precision);
        emits("play", { ref: aniNumRef, value: defaultValue.value });
        if (minValue === props.value) {
          finishTime = current;
          finish();
          return;
        }
      } else {
        const endTime = Math.min(current - startTime, props.durTime);
        const currentValue = props.initial + (props.value - props.initial) * (endTime / props.durTime);
        defaultValue.value = Number(currentValue).toFixed(props.precision);
        emits("play", { ref: aniNumRef, value: defaultValue.value });
        if (endTime === props.durTime) {
          finishTime = current;
          finish();
          return;
        }
      }
      requestAnimationFrame(play);
    };
    const loopAni = () => {
      const current = performance.now();
      if (props.step)
        aniNum = props.initial;
      const interval = Math.min(current - finishTime, props.delay);
      if (interval === props.delay) {
        startTime = current;
        begin();
        return;
      }
      requestAnimationFrame(loopAni);
    };
    const finish = () => {
      if (props.loopAnimate) {
        loopAni();
      }
      emits("finish", aniNumRef);
    };
    const begin = () => {
      emits("begin", aniNumRef);
      startTime = performance.now();
      if (props.step)
        aniNum = props.initial;
      play();
    };
    __expose({
      begin,
      play,
      finish,
      aniNumRef
    });
    watch(
      () => props.animate,
      (newValue) => {
        if (newValue) {
          begin();
        }
      }
    );
    onMounted(() => {
      props.animate && begin();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("text", {
        ref_key: "aniNumRef",
        ref: aniNumRef
      }, toDisplayString(props.format ? props.format(defaultValue.value) : defaultValue.value), 513);
    };
  }
});
export {
  _sfc_main as default
};
