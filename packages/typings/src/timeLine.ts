import dayjs from 'dayjs';
import { InjectionKey } from 'vue';

export type DefaultConfig = {
	pointColor?: string;
	pointWidth?: number;
	pointHeight?: number;
	lineHeight?: number;
	lineWidth?: number | 'auto';
	lineColor?: number;
	showPopper?: Boolean;
	selected?: Boolean;
	beforeWidth?: number;
};

export type LineItem = {
	date?: dayjs.Dayjs | string;
	desc?: string;
	showPopper?: boolean;
	selected?: boolean;
	pointStyle?: any;
	disabled?: boolean;
};

export type TimeLineItem = {
	year: string | number;
	list: Array<LineItem>;
	format?: (val?: TimeLineItem) => any;
};

export type TimeLine = Array<TimeLineItem>;

export type SplitTitle = {
	color?: string;
	fontSize?: number | string;
	lineHight?: number | string;
	format?: (val?: TimeLineItem) => any;
};

export type SplitLine = {
	color?: string;
	width?: number | string;
	height?: number | string;
};

export type SplitType = {
	title?: SplitTitle;
	line?: SplitLine;
	gap?: string | number;
};
