import Vue from 'vue';
import modal from './modal';

const Constructor = Vue.extend(modal);

const Singleton = new Constructor({});

Vue.nextTick(() => {
  Singleton.$mount();
  document.body.appendChild(Singleton.$el);
});

/**
 * 
 */
const Modal = () => {};

Modal.show = () => {
  Singleton.visible = true;
};

Modal.hide = () => {
  Singleton.visible = false;
};

Modal.guid = Math.random();

export default Modal;
