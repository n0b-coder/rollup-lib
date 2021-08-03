import Vue from 'vue';
import Dev from './serve.vue';
import Vuex from 'vuex';
import store from '@/store/main';
import RollupLib from '@/entry.esm';

Vue.use(Vuex);
Vue.use(RollupLib, { store });

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(Dev),
}).$mount('#app');
