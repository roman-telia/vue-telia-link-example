import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { defineCustomElements } from '@teliads/components/loader';
import '@teliads/components/dist/telia-component-library/telia-component-library.css';
import '@/assets/global.css';
import routes from './routes';

defineCustomElements();

Vue.config.ignoredElements = [/telia-\w*/];
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
