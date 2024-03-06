/*
 * @Date: 2023-10-17 11:20:49
 * @Auth: 2659946805@qq.com
 * @LastEditors: 2659946805@qq.com
 * @LastEditTime: 2023-10-24 10:14:33
 * @FilePath: \various-curious-ui\packages\utils\install.ts
 */
import type { SFCWithInstall } from './typescript';

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E,
) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};
