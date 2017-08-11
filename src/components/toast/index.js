import Vue from 'vue';
import toast from './toast';

const instances = [];
const Constructor = Vue.extend(toast);

const run = (instance) => {
  if (instance) {
    instances.push(instance);
  }
};

const getInstance = () => {
  if (instances.length) {
    const instance = instances.shift();
    return instance;
  }
  return new Constructor({
    el: document.createElement('div')
  });
};

const removeElement = (e) => {
  if (e.target.parentNode) {
    e.target.parentNode.removeChild(e.target);
  }
};


Constructor.prototype.close = function _close() {
  this.visible = false;
  this.closed = true;
  this.$el.addEventListener('transitionend', removeElement);
  run(this);
};

const Toast = (options = {}) => {
  const duration = options.duration || 3000;
  const instance = getInstance();

  instance.closed = false;
  clearTimeout(instance.timer);
  instance.message = typeof options === 'string' ? options : options.message;
  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.visible = true;
    instance.$el.removeEventListener('transitionend', removeElement);
    /* eslint-disable */
    ~duration && (instance.timer = setTimeout(() => {
      if (instance.closed) {
        return;
      }
      instance.close();
    }, duration));
  });

  return instance;
};

export default Toast;
