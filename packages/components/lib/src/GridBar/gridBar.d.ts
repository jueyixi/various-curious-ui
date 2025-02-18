import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
export declare const gridBarProps: {
    readonly type: {
        readonly type: PropType<"default" | "vertical">;
        readonly default: "default";
        readonly required: true;
    };
};
export declare type GridBarProps = ExtractPropTypes<typeof gridBarProps>;
