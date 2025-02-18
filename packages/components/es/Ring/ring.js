const lineCapType = ["square", "round"];
const ringProps = {
  // id
  id: String,
  // 圆环半径
  radius: {
    type: [Number, String],
    default: 80
  },
  // 数值
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
  // 进度条宽度
  strokeWidth: {
    type: [Number, String],
    default: 10
  },
  // 进度条颜色
  color: {
    type: [String, Array],
    default: "#329cff"
  },
  // 背景色
  background: {
    type: String,
    default: "#d9d9d9"
  },
  // 背景色
  innerBackground: String,
  innerRadius: {
    type: [Number, String],
    default: 0
  },
  lineCap: {
    type: String,
    default: lineCapType[0]
  },
  // 主标题
  title: String,
  // 副标题
  subTitle: {
    type: String,
    default: "%"
  },
  // 主标题样式
  titleStyle: {
    type: Object,
    default: () => {
    }
  },
  // 副标题样式
  subTitleStyle: {
    type: Object,
    default: () => {
    }
  },
  // 保留小数点位数
  percent: [Number, String],
  // 数值格式化（percent存在时，数值的.00是否需要去除）
  format: Boolean,
  // 初始步长
  startStep: {
    type: [Number, String],
    default: 0
  },
  // 数值跳动步长
  step: {
    type: [Number, String],
    default: 1
  },
  animate: Boolean
};
export {
  ringProps
};
