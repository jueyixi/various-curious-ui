import type { InjectionKey } from 'vue'
import { ThumbType, TrackType } from '@various-curious-ui/typings';

export interface ScrollbarContext {
	scrollbarElement: HTMLDivElement;
	wrapElement: HTMLDivElement;
	gap: number;
	thumb?: ThumbType;
	track?: TrackType;
}

export const scrollbarContextKey: InjectionKey<ScrollbarContext> = Symbol(
  'scrollbarContextKey'
)
