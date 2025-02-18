const Effect = ["light", "dark"];
const floatingProps = {
  visible: Boolean,
  content: String,
  effect: {
    type: String,
    default: Effect[0]
  },
  /**
   * @description floating元素的出现的触发方式
   */
  trigger: {
    type: String,
    default: "hover"
  },
  /**
   * @description floating元素相对于reference元素的定位
   */
  placement: {
    type: String,
    default: "bottom"
  },
  strategy: {
    type: String,
    default: "absolute"
  },
  /**
   * @description floating元素相对于reference元素的偏移
   */
  offset: {
    type: Number,
    default: 8
  },
  tabindex: Number,
  /**
   * @description floating元素出现时的过渡
   */
  transition: {
    type: String,
    default: "fade"
  },
  /**
   * @description floating元素出现前的延时
   */
  openDelay: {
    type: Number,
    default: 0
  },
  /**
   * @description floating元素消失前的延时
   */
  closeDelay: {
    type: Number,
    default: 0
  },
  /**
   * @description 是否禁止floating元素改变可视状态
   */
  disabled: Boolean,
  /**
   * @description 是否可以通过点击body来关闭floating元素
   */
  closeOnClickBody: Boolean,
  /**
   * @description 是否挂载后立即渲染floating元素
   */
  autoOpen: Boolean,
  /**
   * @description 是否将floating元素瞬移到body下对应容器中, 当floating元素z-index层级出问题时开启此项
   */
  teleported: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否在floating元素上创建小箭头
   */
  showArrow: {
    type: Boolean,
    default: true
  },
  arrowPadding: {
    type: Number,
    default: 5
  },
  /**
   * @description floating元素容器的类
   */
  floatingClass: [String, Array],
  floatingStyle: [String, Object, Array],
  /**
   * @description 动态reference元素, 注意，此项优先级小于slot.reference
   */
  reference: Object,
  // 虚拟元素--支持dom选择器名称，ref，自定义
  virtualRef: [String, Object, Object],
  boundariesRef: Object,
  /**
   * @description 是否开启快速跟踪, 当reference元素是可以移动的且floating元素更不上移动时开启此项
   */
  quickTrack: Boolean,
  // 配置项
  floatingOptions: Object
};
const floatingEmits = ["close", "closed", "open", "opened", "update:visible"];
export {
  floatingEmits,
  floatingProps
};
