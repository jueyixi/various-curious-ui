import type { ExtractPropTypes, PropType } from 'vue';
export declare const thumbProps: {
    readonly size: PropType<string | number>;
    readonly barWidth: PropType<string | number>;
    readonly vertical: BooleanConstructor;
    readonly move: NumberConstructor;
    readonly ratio: {
        readonly type: NumberConstructor;
        readonly required: true;
    };
    readonly always: BooleanConstructor;
};
export declare const thumbEmits: any[];
export declare type ThumbProps = ExtractPropTypes<typeof thumbProps>;
export declare type ThumbEmits = typeof thumbEmits;
export declare const BarConfig: {
    readonly vertical: {
        readonly offset: "offsetHeight";
        readonly scroll: "scrollTop";
        readonly scrollSize: "scrollHeight";
        readonly size: "height";
        readonly key: "vertical";
        readonly axis: "Y";
        readonly client: "clientY";
        readonly direction: "top";
    };
    readonly horizontal: {
        readonly offset: "offsetWidth";
        readonly scroll: "scrollLeft";
        readonly scrollSize: "scrollWidth";
        readonly size: "width";
        readonly key: "horizontal";
        readonly axis: "X";
        readonly client: "clientX";
        readonly direction: "left";
    };
};
