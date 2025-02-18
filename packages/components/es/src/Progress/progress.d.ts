import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
export declare const progressProps: {
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
    readonly round: BooleanConstructor;
    readonly showText: BooleanConstructor;
    readonly animate: BooleanConstructor;
    readonly dur: {
        readonly type: StringConstructor;
        readonly default: "3s";
    };
    readonly delay: {
        readonly type: StringConstructor;
        readonly default: "0s";
    };
    readonly repeatCount: {
        readonly type: StringConstructor;
        readonly default: "1";
    };
    readonly fill: {
        readonly type: PropType<"remove" | "forwards">;
        readonly default: "forwards";
    };
    readonly transitionName: {
        readonly type: StringConstructor;
        readonly default: "ease";
    };
    readonly status: {
        readonly type: PropType<string>;
        readonly default: string;
    };
};
export declare type ProgressProps = ExtractPropTypes<typeof progressProps>;
