/*
 * @Date: 2023-10-17 11:15:29
 * @Auth: 2659946805@qq.com
 * @LastEditors: 2659946805@qq.com
 * @LastEditTime: 2023-11-07 16:04:23
 * @FilePath: \various-curious-ui\packages\components\src\index.ts
 */
import * as components from './components';
import type { App } from 'vue';
export * from './components';

export const install = function (app: App) {
  Object.keys(components).forEach(key => {
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });

  return app;
};

export default {
  install,
};
