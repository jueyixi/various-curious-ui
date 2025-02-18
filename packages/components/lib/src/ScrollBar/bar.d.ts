import type { ExtractPropTypes, PropType } from 'vue';
import type Bar from './bar.vue';
export declare const barProps: {
    readonly always: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly width: StringConstructor;
    readonly height: StringConstructor;
    readonly barWidth: PropType<string | number>;
    readonly ratioX: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly ratioY: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly gap: NumberConstructor;
};
export declare const barEmits: any[];
export declare type BarProps = ExtractPropTypes<typeof barProps>;
export declare type BarEmits = typeof barEmits;
export declare type BarInstance = InstanceType<typeof Bar>;
