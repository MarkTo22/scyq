import Vue from 'vue'
import App from './App.vue'

// init axios
import Api from './api/api';
Vue.prototype.$Api = Api;

// init css 
import './assets/css/index.css';

// init echart 、vue-echart
import Echart from 'vue-echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
Vue.component('v-chart', Echart);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
