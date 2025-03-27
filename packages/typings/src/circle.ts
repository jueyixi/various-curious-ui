export type ColorStop = {
	offset: string;
	color: string;
}
export type Gradients = {
	id: string;
	x1: string;
	y1: string;
	x2: string;
	y2: string;
	colorStops: ColorStop[];
};