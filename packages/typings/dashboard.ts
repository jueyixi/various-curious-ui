export type OffsetColor = {
	offset: string | number;
	color: string;
	startStep?: number;
	endStep?: number;
};

export type SplitStyle = {
	fontSize?:number,
	fontWeight?:number | string,
	fontFamily?:string,
	textBaseline?:string,
	color?:string,
	textAlign?:string,
}

export type SubTextStyle = SplitStyle & {
	top?:number,
	bottom?:number,
	left?:number,
	right?:number,
}

export type TextStyle = SubTextStyle & {
	unit?:string,
}