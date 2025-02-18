import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
import dayjs from 'dayjs';
export declare enum CurrentText {
    week = "\u672C\u5468",
    month = "\u672C\u6708",
    year = "\u672C\u5E74"
}
export declare const calendarProps: {
    readonly mode: {
        readonly type: PropType<"month" | "year" | "week">;
        readonly default: "month";
        readonly required: true;
    };
    readonly currentText: StringConstructor;
    readonly prevText: StringConstructor;
    readonly nextText: StringConstructor;
    readonly value: typeof dayjs.Dayjs;
};
export declare const calendarEmits: string[];
export declare type CalendarProps = ExtractPropTypes<typeof calendarProps>;
export declare type CalendarType = CalendarProps['mode'];
