import indicator from './indicator';
import Vue from 'vue';

const Constructor = Vue.extend(indicator);

Constructor.prototype.show = function() {
  this.visible = true;
};

Constructor.prototype.hide = function() {
  this.visible = false;
};

const Singleton = new Constructor({
  el: document.createElement('div')
});

const Indicator = () => {

};

Indicator.show = () => {
  document.body.appendChild(Singleton.$el);
  Singleton.show();
};

Indicator.hide = () => {
  document.body.removeChild(Singleton.$el);
  Singleton.hide();
};

export default Indicator;
