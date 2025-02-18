const aniNumberProps = {
  // 数值
  value: {
    type: Number,
    default: 0,
    required: true
  },
  // 初始数值
  initial: {
    type: Number,
    default: 0
  },
  // 持续时间
  durTime: {
    type: Number,
    default: 3e3
  },
  // 循环动画
  loopAnimate: {
    type: Boolean,
    default: false
  },
  // 动画
  animate: {
    type: Boolean,
    default: true
  },
  // 精度
  precision: {
    type: [Number, String],
    default: 0
  },
  // 步长
  step: {
    type: Number,
    default: 0
  },
  //上一次动画结束和下一次动画开始之间间隔时间
  delay: {
    type: Number,
    default: 1e3
  },
  // 文本格式化
  format: Function
};
const aniNumberEmits = ["begin", "finish", "play"];
export {
  aniNumberEmits,
  aniNumberProps
};
