const fillType = ["freeze", "remove"];
const position = ["bottom", "top"];
const verGridBarProps = {
  // 进度条宽度
  strokeWidth: {
    type: [Number, String],
    default: 30
  },
  height: [Number, String],
  value: {
    type: [Number, String],
    default: 0,
    required: true
  },
  // 最大值
  maxValue: {
    type: [Number, String],
    default: 100
  },
  background: [String, Array],
  color: [String, Array],
  showText: Boolean,
  textPosition: {
    type: String,
    default: position[0]
  },
  partGap: {
    type: Number,
    default: 5
  },
  animate: Boolean,
  from: String,
  to: String,
  by: String,
  begin: {
    type: String,
    default: "0s"
  },
  dur: {
    type: String,
    default: "3s"
  },
  repeatCount: {
    type: String,
    default: "1"
  },
  fill: {
    type: String,
    default: fillType[0]
  },
  animation: {
    type: Object,
    default: () => {
    }
  }
};
export {
  verGridBarProps
};
