import "../packages/utils/IndexManager.js";
import { isNumber } from "../packages/utils/is.js";
const position = ["inside", "outside"];
const scrollbarProps = {
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  // 是否显示原生滚动条
  native: Boolean,
  // 滚动条轨道宽度
  barWidth: [String, Number],
  // 滚动条尺寸
  size: Number,
  /**
   * @description always show
   */
  always: Boolean,
  /**
   * @description minimum size of scrollbar
   */
  minSize: {
    type: Number,
    default: 20
  },
  // 滚动条与内容盒子的间距（竖向：上下间距；横向：左右间距）
  gap: {
    type: Number,
    default: 2
  },
  // 内容容器尺寸不会变动时可开启，停止监听，可提升性能
  stopResize: Boolean,
  /**
   * @description style of wrap
   */
  wrapStyle: {
    type: [String, Object, Array],
    default: ""
  },
  /**
   * @description class of wrap
   */
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  /**
   * @description class of view
   */
  contentClass: {
    type: [String, Array],
    default: ""
  },
  /**
   * @description style of view
   */
  contentStyle: {
    type: [String, Object, Array],
    default: ""
  },
  thumb: {
    type: Object,
    default: {}
  },
  track: {
    type: Object,
    default: {}
  },
  position: {
    type: String,
    default: position[0]
  },
  outsideGap: [String, Number]
};
const scrollbarEmits = {
  scroll: ({ scrollTop, scrollLeft }) => [scrollTop, scrollLeft].every(isNumber)
};
export {
  scrollbarEmits,
  scrollbarProps
};
