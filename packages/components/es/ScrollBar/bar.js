const barProps = {
  always: {
    type: Boolean,
    default: true
  },
  width: String,
  height: String,
  barWidth: [String, Number],
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  },
  gap: Number
};
const barEmits = [];
export {
  barEmits,
  barProps
};
