import confirm from './confirm';
import Vue from 'vue';

const Constructor = Vue.extend(confirm);

Constructor.prototype.show = function(message) {
  this.message = message;
  this.visible = true;
};

Constructor.prototype.hide = function() {
  this.visible = false;
};

let Instance;

const onShow = function() {
  Vue.nextTick(() => {
    document.body.appendChild(Instance.$el);
  });
};

const onHide = function() {
  console.log('onHide');
  Vue.nextTick(() => {
    document.body.removeChild(Instance.$el);
    Instance.$destroy();
    Instance = null;
  });
};

const onConfirm = function() {
  console.log('onConfirm');
};

const onCancel = function() {
  console.log('onCancel');
};

const Confirm = (message) => {
  Confirm.show(message);
};

/**
 * @param String message 
 * @param Object config 
 */
Confirm.show = (message) => {
  Instance = new Constructor({
    el: document.createElement('div')
  });
  Instance.$on('show', onShow);
  Instance.$on('hide', onHide);
  Instance.$on('confirm', onConfirm);
  Instance.$on('cancel', onCancel);
  Instance.show(message);
};

/**
 * 
 */
Confirm.hide = () => {
  Instance.hide();
  Instance.$off('show', onShow);
  Instance.$off('hide', onHide);
  Instance.$off('confirm', onConfirm);
  Instance.$off('cancel', onCancel);
  Instance.$destroy();
};

export default Confirm;
