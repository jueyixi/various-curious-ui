<template>
    <text ref="aniNumRef">{{ props.format ? props.format(defaultValue) : defaultValue }}</text>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { aniNumberProps, aniNumberEmits } from "./aniNumber";
defineOptions({
    name: "VcAniNumber",
    inheritAttrs: false,
})
const props = defineProps(aniNumberProps);

const emits = defineEmits(aniNumberEmits);

const defaultValue = ref<string | number>(0);
const aniNumRef = ref();

let startTime: number = performance.now(); // 开始时间
let finishTime: any = undefined; // 结束时间
let aniNum: number = props.initial; // 初始值

// 播放动画
const play = () => {
    const current: number = performance.now();
    // 设置步长时
    if (props.step) {
        aniNum = aniNum + props.step;
        const minValue: number = Math.min(aniNum, props.value);
        defaultValue.value = Number(minValue).toFixed(props.precision as any);
        emits('play', { ref: aniNumRef, value: defaultValue.value });
        if (minValue === props.value) {
            finishTime = current;
            finish();
            return;
        }
    } else {
        const endTime: number = Math.min(current - startTime, props.durTime);
        const currentValue: number =
            props.initial + (props.value - props.initial) * (endTime / props.durTime);
        defaultValue.value = Number(currentValue).toFixed(props.precision as any);
        emits('play', { ref: aniNumRef, value: defaultValue.value });
        if (endTime === props.durTime) {
            finishTime = current;
            finish();
            return;
        }
    }
    requestAnimationFrame(play);
};

// 循环
const loopAni = () => {
    const current: number = performance.now();
    if (props.step) aniNum = props.initial;
    const interval: number = Math.min(current - finishTime, props.delay);
    if (interval === props.delay) {
        startTime = current;
        begin();
        return;
    }
    requestAnimationFrame(loopAni);
};

// 完成
const finish = () => {
    if (props.loopAnimate) {
        loopAni();
    }
    emits('finish', aniNumRef);
};
// 开始
const begin = () => {
    emits('begin', aniNumRef);
    startTime = performance.now();
    if (props.step) aniNum = props.initial;
    play();
};

defineExpose({
    begin,
    play,
    finish,
    aniNumRef,
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
</script>