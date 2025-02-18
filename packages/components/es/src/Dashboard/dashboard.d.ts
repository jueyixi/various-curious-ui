import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
import type { OffsetColor, SubTextStyle, TextStyle, SplitStyle } from "@various-curious-ui/typings";
export declare const dashboardProps: {
    readonly id: StringConstructor;
    readonly radius: {
        readonly type: PropType<string | number>;
        readonly default: 150;
    };
    readonly title: StringConstructor;
    readonly subTitle: StringConstructor;
    readonly titleStyle: {
        readonly type: PropType<TextStyle>;
        readonly default: () => void;
    };
    readonly middleTitle: BooleanConstructor;
    readonly subTitleStyle: {
        readonly type: PropType<SubTextStyle>;
        readonly default: () => void;
    };
    readonly color: {
        readonly type: PropType<string | OffsetColor[]>;
        readonly default: "#329cff";
    };
    readonly background: {
        readonly type: PropType<string | OffsetColor[]>;
        readonly default: "rgba(50, 156, 255, 0.5)";
    };
    readonly value: {
        readonly type: PropType<string | number>;
        readonly default: 0;
        readonly required: true;
    };
    readonly startAngle: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly endAngle: {
        readonly type: NumberConstructor;
        readonly default: 180;
    };
    readonly semicircle: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly maxValue: {
        readonly type: PropType<string | number>;
        readonly default: 100;
    };
    readonly splitNumber: {
        readonly type: PropType<string | number>;
        readonly default: 5;
    };
    readonly splitWidth: {
        readonly type: PropType<string | number>;
        readonly default: 2;
    };
    readonly splitSpace: {
        readonly type: PropType<string | number>;
        readonly default: 2;
    };
    readonly splitStyle: {
        readonly type: PropType<SplitStyle>;
        readonly default: () => void;
    };
    readonly splitColor: {
        readonly type: StringConstructor;
        readonly default: "rgba(0, 0, 0, 0.5)";
    };
    readonly innerRadius: {
        readonly type: PropType<string | number>;
        readonly default: 110;
    };
    readonly interBackground: {
        readonly type: PropType<string | string[]>;
        readonly default: "rgba(0, 0, 0,0.7)";
    };
    readonly outerRadius: {
        readonly type: PropType<string | number>;
        readonly default: 130;
    };
    readonly outerWidth: {
        readonly type: PropType<string | number>;
        readonly default: 20;
    };
    readonly outerBackground: {
        readonly type: StringConstructor;
        readonly default: "rgba(217, 217, 217,1)";
    };
    readonly strokeWidth: {
        readonly type: PropType<string | number>;
        readonly default: 5;
    };
    readonly startStep: {
        readonly type: PropType<string | number>;
        readonly default: 0;
    };
    readonly step: {
        readonly type: PropType<string | number>;
        readonly default: 1;
    };
};
export declare type DashboardProps = ExtractPropTypes<typeof dashboardProps>;
