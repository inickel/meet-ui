import Vue from 'vue';
import App from './App';
import UI from '../src';

console.log(UI);
Vue.use(UI);

new Vue({
  el: '#app',
  render: (h) => {
    return h(App);
  }
});
