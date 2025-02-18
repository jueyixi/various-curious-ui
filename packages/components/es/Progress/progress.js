const fillType = ["forwards", "remove"];
const Status = ["primary", "success", "warning", "danger"];
const progressProps = {
  // 进度条宽度
  strokeWidth: {
    type: [Number, String],
    default: 10
  },
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
  round: Boolean,
  showText: Boolean,
  animate: Boolean,
  dur: {
    type: String,
    default: "3s"
  },
  delay: {
    type: String,
    default: "0s"
  },
  repeatCount: {
    type: String,
    default: "1"
  },
  fill: {
    type: String,
    default: fillType[0]
    //  动画结束停在终止状态 // remove  动画结束回到起始状态
  },
  transitionName: {
    type: String,
    default: "ease"
  },
  status: {
    type: String,
    default: Status[0]
  }
};
export {
  progressProps
};
