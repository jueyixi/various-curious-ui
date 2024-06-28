import type { ExtractPropTypes,PropType } from 'vue';
export const aniNumberProps = {
    // 数值
    value: {
        type: Number,
        default: 0,
    },
    // 初始数值
    initial: {
        type: Number,
        default: 0,
    },
    // 持续时间
    durTime: {
        type: Number,
        default: 3000,
    },
    // 循环动画
    loopAnimate: {
        type: Boolean,
        default: false,
    },
    // 动画
    animate: {
        type: Boolean,
        default: true,
    },
    // 精度
    precision: {
        type: [Number, String] as PropType<number | string>,
        default: 0,
    },
    // 步长
    step: {
        type: Number,
        default: 0,
    },
    //上一次动画结束和下一次动画开始之间间隔时间
    delay: {
        type: Number,
        default: 1000,
    },
    // 文本格式化
    format: {
        type: Function,
        default: undefined,
    },
}

export const aniNumberEmits = ['begin', 'finish', 'play'];

export type AniNumberProps = ExtractPropTypes<typeof aniNumberProps>;
export type AniNumberEmits = typeof aniNumberEmits;