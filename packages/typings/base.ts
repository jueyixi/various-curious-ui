export type FloatingTrigger = 'hover' | 'click' | 'focus' | 'clickToOpen' | 'unset' | 'manual';

export type MaybeHTMLElement = HTMLElement | undefined | null;

type fade = 'fadeDown' | 'fadeRight' | 'fadeUp' | 'fadeLeft';
type fadeModifier = 'half' | 'completely';

type scale = 'scaleVertical' | 'scaleHorizontal';
type scaleModifier = 'center' | 'start' | 'end';

export type Transition =
	| `vc-transition-${fade}`
	| `vc-transition-fade`
	| `vc-transition-${fade}--${fadeModifier}`
	| 'vc-transition-none'
	| `vc-transition-${scale}`
	| `vc-transition-${scale}--${scaleModifier}`
	| `vc-transition-scale`
	| `vc-transition-scale--${fadeModifier}`
	| `vc-transition-collapse--vertical`
	| `vc-transition-collapse--horizontal`;

export type AnyFunction = (...args: any) => any;
