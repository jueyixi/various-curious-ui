import {Ref, ref} from "vue";

/**
 * @description 纯粹是创建一个响应式布尔值
 * @param f 默认值
 */
export const useFlag =  function (f:boolean = false)  {
    const flag:Ref<boolean> = ref<boolean>(f);
    const setFalse = function () {
        flag.value = false;
    }
    const setTrue = function () {
        flag.value = true;
    }

    const toggle = function () {
        if (flag.value){
            setFalse();
        }
        else{
            setTrue();
        }
    }

    return {
        flag,
        setTrue,
        setFalse,
        toggle
    }

}