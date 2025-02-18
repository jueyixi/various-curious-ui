import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
import type { SubTextStyle, TextStyle } from "@various-curious-ui/typings";
export declare const ringProps: {
    readonly id: StringConstructor;
    readonly radius: {
        readonly type: PropType<string | number>;
        readonly default: 80;
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
    readonly strokeWidth: {
        readonly type: PropType<string | number>;
        readonly default: 10;
    };
    readonly color: {
        readonly type: PropType<string | string[]>;
        readonly default: "#329cff";
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: "#d9d9d9";
    };
    readonly innerBackground: StringConstructor;
    readonly innerRadius: {
        readonly type: PropType<string | number>;
        readonly default: 0;
    };
    readonly lineCap: {
        readonly type: PropType<"round" | "square">;
        readonly default: "square";
    };
    readonly title: StringConstructor;
    readonly subTitle: {
        readonly type: StringConstructor;
        readonly default: "%";
    };
    readonly titleStyle: {
        readonly type: PropType<TextStyle>;
        readonly default: () => void;
    };
    readonly subTitleStyle: {
        readonly type: PropType<SubTextStyle>;
        readonly default: () => void;
    };
    readonly percent: PropType<string | number>;
    readonly format: BooleanConstructor;
    readonly startStep: {
        readonly type: PropType<string | number>;
        readonly default: 0;
    };
    readonly step: {
        readonly type: PropType<string | number>;
        readonly default: 1;
    };
    readonly animate: BooleanConstructor;
};
export declare type RingProps = ExtractPropTypes<typeof ringProps>;
