import { ref } from "vue";
const useFlag = function(f = false) {
  const flag = ref(f);
  const setFalse = function() {
    flag.value = false;
  };
  const setTrue = function() {
    flag.value = true;
  };
  const toggle = function() {
    if (flag.value) {
      setFalse();
    } else {
      setTrue();
    }
  };
  return {
    flag,
    setTrue,
    setFalse,
    toggle
  };
};
export {
  useFlag
};
