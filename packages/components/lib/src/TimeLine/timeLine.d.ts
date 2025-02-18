import type { ExtractPropTypes, PropType } from 'vue';
import type { TimeLineItem, DefaultConfig, SplitType } from '@various-curious-ui/typings';
export declare const timeLineProps: {
    readonly disabled: BooleanConstructor;
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly height: PropType<string | number>;
    readonly split: {
        readonly type: PropType<SplitType>;
        readonly default: {};
    };
    readonly defaultConfig: {
        readonly type: PropType<DefaultConfig>;
        readonly default: {};
    };
    readonly dataSource: {
        readonly type: PropType<TimeLineItem[]>;
        readonly default: readonly [];
        readonly required: true;
    };
    readonly floating: PropType<FloatingProps>;
    readonly scrollbar: {
        readonly type: PropType<ScrollbarProps>;
        readonly default: {};
    };
};
export declare const timeLineEmits: string[];
export declare type TimeLineProps = ExtractPropTypes<typeof timeLineProps>;
export declare type TimeLineEmits = typeof timeLineEmits;
