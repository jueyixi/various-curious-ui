import * as components from './components';
import type { App } from 'vue';
export * from './components';
import { IndexManager } from 'vc-utils';
import { IOptions } from '@various-curious-ui/typings';

export const install = function (app: App,options?:IOptions) {
  Object.keys(components).forEach(key => {
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });
  if (!options) return;

  const { zIndex = 2000 } = options;

  new IndexManager(zIndex);

  return app;
};

export default {
  install,
};
