import { PropType, ExtractPropTypes, StyleValue } from 'vue';
import { FloatingTrigger, Transition } from '@various-curious-ui/typings';
import { Placement, Strategy, type ReferenceElement, VirtualElement, UseFloatingOptions } from '@floating-ui/vue';
export declare const floatingProps: {
    readonly visible: BooleanConstructor;
    readonly content: StringConstructor;
    readonly effect: {
        readonly type: PropType<"light" | "dark">;
        readonly default: "light";
    };
    /**
     * @description floating元素的出现的触发方式
     */
    readonly trigger: {
        readonly type: PropType<FloatingTrigger>;
        readonly default: "hover";
    };
    /**
     * @description floating元素相对于reference元素的定位
     */
    readonly placement: {
        readonly type: PropType<Placement>;
        readonly default: "bottom";
    };
    readonly strategy: {
        readonly type: PropType<Strategy>;
        readonly default: "absolute";
    };
    /**
     * @description floating元素相对于reference元素的偏移
     */
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly tabindex: NumberConstructor;
    /**
     * @description floating元素出现时的过渡
     */
    readonly transition: {
        readonly type: PropType<Transition>;
        readonly default: "fade";
    };
    /**
     * @description floating元素出现前的延时
     */
    readonly openDelay: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    /**
     * @description floating元素消失前的延时
     */
    readonly closeDelay: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    /**
     * @description 是否禁止floating元素改变可视状态
     */
    readonly disabled: BooleanConstructor;
    /**
     * @description 是否可以通过点击body来关闭floating元素
     */
    readonly closeOnClickBody: BooleanConstructor;
    /**
     * @description 是否挂载后立即渲染floating元素
     */
    readonly autoOpen: BooleanConstructor;
    /**
     * @description 是否将floating元素瞬移到body下对应容器中, 当floating元素z-index层级出问题时开启此项
     */
    readonly teleported: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /**
     * @description 是否在floating元素上创建小箭头
     */
    readonly showArrow: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly arrowPadding: {
        readonly type: NumberConstructor;
        readonly default: 5;
    };
    /**
     * @description floating元素容器的类
     */
    readonly floatingClass: PropType<string | string[]>;
    readonly floatingStyle: PropType<StyleValue>;
    /**
     * @description 动态reference元素, 注意，此项优先级小于slot.reference
     */
    readonly reference: PropType<any>;
    readonly virtualRef: PropType<string | Element | VirtualElement>;
    readonly boundariesRef: PropType<any>;
    /**
     * @description 是否开启快速跟踪, 当reference元素是可以移动的且floating元素更不上移动时开启此项
     */
    readonly quickTrack: BooleanConstructor;
    readonly floatingOptions: PropType<UseFloatingOptions<ReferenceElement>>;
};
export declare const floatingEmits: readonly ["close", "closed", "open", "opened", "update:visible"];
export declare type FloatingProps = ExtractPropTypes<typeof floatingProps>;
export declare type FloatingEmits = typeof floatingEmits;
