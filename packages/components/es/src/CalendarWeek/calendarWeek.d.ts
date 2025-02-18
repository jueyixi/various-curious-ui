import { PropType } from 'vue';
import type { ExtractPropTypes, StyleValue } from 'vue';
import dayjs from 'dayjs';
export declare const calendarWeekProps: {
    readonly columns: {
        readonly type: boolean;
        readonly default: () => string[];
    };
    readonly disabled: BooleanConstructor;
    readonly multiple: BooleanConstructor;
    readonly dataSource: {
        readonly type: boolean;
        readonly default: () => any[];
        readonly required: true;
    };
    readonly minHeight: PropType<string | number>;
    readonly maxHeight: PropType<string | number>;
    readonly height: {
        readonly type: PropType<string | number>;
        readonly default: 300;
    };
    readonly columnsGap: {
        readonly type: PropType<string | number>;
        readonly default: 8;
    };
    readonly contentStyle: {
        readonly type: PropType<StyleValue>;
        readonly default: "";
    };
    readonly contentClass: PropType<string | string[]>;
    readonly value: typeof dayjs.Dayjs;
};
export declare const calendarWeekEmits: string[];
export declare type CalendarWeekProps = ExtractPropTypes<typeof calendarWeekProps>;
