import type { Plugin, PropType } from 'vue';

export type SFCWithInstall<T> = T & Plugin

export const definePropType = <T>(val: any): PropType<T> => val;
