import Vue from 'vue';
import modal from './modal';

const Constructor = Vue.extend(modal);

let Singleton;

const defaultConfig = {
  hideOnClick: false,
  onClick: function(e) {
    console.log(e);
  }
};

const Modal = (config) => {
  Modal.show(config);
};

Modal.show = (config) => {
  const setting = Object.assign({}, defaultConfig, config);
  console.log(setting);
  Singleton = new Constructor({});
  Singleton.$on('click', setting.onClick);
  Singleton.visible = true;
  Singleton.config = setting;

  Vue.nextTick(() => {
    Singleton.$mount();
    document.body.appendChild(Singleton.$el);
  });
};

Modal.hide = () => {
  Singleton.visible = false;
  Singleton.$off('click', Singleton.config.onClick);
  Vue.nextTick(() => {
    document.body.removeChild(Singleton.$el);
    Singleton.$destroy();
  });
};

export default Modal;
