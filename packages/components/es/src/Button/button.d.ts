import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
export declare const buttonProps: {
    readonly prefixIcon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly suffixIcon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: PropType<"small" | "middle" | "large" | "mini">;
        readonly default: "middle";
    };
    readonly nativeType: {
        readonly type: PropType<"button" | "submit" | "reset">;
        readonly default: "button";
    };
    readonly shape: PropType<"circle" | "default" | "round">;
    readonly target: {
        readonly type: PropType<"_blank" | "_parent" | "_self" | "_top">;
        readonly default: "_self";
    };
    readonly type: {
        readonly type: PropType<"default" | "primary" | "success" | "warinng" | "dashed">;
        readonly default: "default";
    };
    readonly href: StringConstructor;
    readonly danger: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly ghost: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly link: BooleanConstructor;
    readonly text: BooleanConstructor;
};
export declare const buttonEmits: {
    /**
     * @description 点击按钮后触发的事件
     * @param event
     */
    click: (evt: MouseEvent) => boolean;
};
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export declare type ButtonEmits = typeof buttonEmits;
export declare type ButtonType = ButtonProps['type'];
export declare type ButtonNativeType = ButtonProps['nativeType'];
