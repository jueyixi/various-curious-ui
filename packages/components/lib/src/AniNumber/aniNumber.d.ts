import type { ExtractPropTypes, PropType } from 'vue';
export declare const aniNumberProps: {
    readonly value: {
        readonly type: NumberConstructor;
        readonly default: 0;
        readonly required: true;
    };
    readonly initial: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly durTime: {
        readonly type: NumberConstructor;
        readonly default: 3000;
    };
    readonly loopAnimate: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly animate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly precision: {
        readonly type: PropType<string | number>;
        readonly default: 0;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly delay: {
        readonly type: NumberConstructor;
        readonly default: 1000;
    };
    readonly format: FunctionConstructor;
};
export declare const aniNumberEmits: string[];
export declare type AniNumberProps = ExtractPropTypes<typeof aniNumberProps>;
export declare type AniNumberEmits = typeof aniNumberEmits;
