import alert from './alert';
import Vue from 'vue';

const Constructor = Vue.extend(alert);

Constructor.prototype.show = function(message) {
  this.message = message
  this.visible = true;
};

Constructor.prototype.hide = function() {
  this.visible = false;
};

const Singleton = new Constructor({});

const onShow = function() {
  Vue.nextTick(() => {
    Singleton.$mount();    
    document.body.appendChild(Singleton.$el);
  });
};

const onHide = function() {
  Vue.nextTick(() => {
    document.body.removeChild(Singleton.$el);
  });
};

Singleton.$on('show', onShow);

Singleton.$on('hide', onHide);

const Alert = (message) => {
  Alert.show(message);  
};

Alert.show = (message) => {
  Singleton.show(message);  
};

Alert.hide = () => {
  Singleton.hide();
};

export default Alert;
