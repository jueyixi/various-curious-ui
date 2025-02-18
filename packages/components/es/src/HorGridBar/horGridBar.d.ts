import type { ExtractPropTypes, PropType } from 'vue';
export declare const horGridBarProps: {
    readonly strokeWidth: {
        readonly type: PropType<string | number>;
        readonly default: 10;
    };
    readonly value: {
        readonly type: PropType<string | number>;
        readonly default: 0;
        readonly required: true;
    };
    readonly maxValue: {
        readonly type: PropType<string | number>;
        readonly default: 100;
    };
    readonly background: PropType<string | string[]>;
    readonly color: PropType<string | string[]>;
    readonly showText: BooleanConstructor;
    readonly partGap: {
        readonly type: NumberConstructor;
        readonly default: 5;
    };
    readonly animate: BooleanConstructor;
    readonly from: StringConstructor;
    readonly to: StringConstructor;
    readonly by: StringConstructor;
    readonly begin: {
        readonly type: StringConstructor;
        readonly default: "0s";
    };
    readonly dur: {
        readonly type: StringConstructor;
        readonly default: "3s";
    };
    readonly repeatCount: {
        readonly type: StringConstructor;
        readonly default: "1";
    };
    readonly fill: {
        readonly type: PropType<"freeze" | "remove">;
        readonly default: "freeze";
    };
    readonly animation: {
        readonly type: ObjectConstructor;
        readonly default: () => void;
    };
};
export declare type HorGridBarProps = ExtractPropTypes<typeof horGridBarProps>;
