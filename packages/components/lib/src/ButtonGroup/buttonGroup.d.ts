import type { InjectionKey, ExtractPropTypes } from 'vue';
import type { ButtonProps } from '../Button/button';
export interface ButtonGroupContext {
    size?: ButtonProps['size'];
    type?: ButtonProps['type'];
    danger?: ButtonProps['danger'];
}
export declare const buttonGroupContextKey: InjectionKey<ButtonGroupContext>;
export declare const buttonGroupProps: {
    /**
     * @description 控制按钮组按钮的尺寸
     */
    readonly size: {
        readonly type: import("vue").PropType<"small" | "middle" | "large" | "mini">;
        readonly default: "middle";
    };
    /**
     * @description 控制按钮组按钮的类型
     */
    readonly type: {
        readonly type: import("vue").PropType<"default" | "primary" | "success" | "warinng" | "dashed">;
        readonly default: "default";
    };
    /**
     * @description 控制按钮组按钮的类型
     */
    readonly danger: BooleanConstructor;
};
export declare type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;
