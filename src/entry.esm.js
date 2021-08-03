import { moduleRollupLib } from '@/store/modules/types';
import store from './store';
import * as components from '@/lib-components/index';

const existsStore = ({ storeAux, module }) => !!storeAux.hasModule(module);

const install = function installRollupLib(Vue, options) {
  if (!options || !options.store) {
    throw new Error('Please initialise plugin with a Vuex store.');
  }
  if (!existsStore({ storeAux: options.store, module: moduleRollupLib })) {
    options.store.registerModule(moduleRollupLib, store);
  }
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};

export default install;

export * from '@/lib-components/index';
