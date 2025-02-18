import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
import { Gradients } from "@various-curious-ui/typings";
export declare const circleProps: {
    readonly value: {
        readonly type: PropType<string | number>;
        readonly default: 0;
        readonly required: true;
    };
    readonly maxValue: {
        readonly type: PropType<string | number>;
        readonly default: 100;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly strokeWidth: {
        readonly type: NumberConstructor;
        readonly default: 6;
    };
    readonly lineCap: {
        readonly type: PropType<"round" | "butt">;
        readonly default: "butt";
    };
    readonly part: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly partGap: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly separateColor: {
        readonly type: StringConstructor;
        readonly default: "#fff";
    };
    readonly background: PropType<string | string[]>;
    readonly color: PropType<string | string[]>;
    readonly showText: BooleanConstructor;
    readonly clockWise: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly gradient: PropType<Gradients>;
    readonly gradients: PropType<Gradients[]>;
    readonly animate: BooleanConstructor;
    readonly from: NumberConstructor;
    readonly to: NumberConstructor;
    readonly by: NumberConstructor;
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
export declare type RingProps = ExtractPropTypes<typeof circleProps>;
