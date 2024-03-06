/*
 * @Date: 2023-10-24 10:21:15
 * @Auth: 2659946805@qq.com
 * @LastEditors: 2659946805@qq.com
 * @LastEditTime: 2023-11-10 10:46:26
 * @FilePath: \various-curious-ui\packages\components\components.d.ts
 */
import * as components from './src/components';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // 'd-button': typeof components.Button
  }
}
