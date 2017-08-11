import Button from '@/components/button';
import Toast from '@/components/toast';
import Indicator from '@/components/indicator';
import Alert from '@/components/alert';
import Confirm from '@/components/confirm';
import Modal from '@/components/modal';
import Row from '@/components/row';
import Switch from '@/components/switch';

const Components = {
  Button,
  Switch,
  Row
};

const install = (Vue, opts = {}) => {
  console.log('src.install', Vue);
  Object.keys(Components).forEach((key) => {
    Vue.component(`mp${key}`, Components[key]);
  });

  Vue.prototype.toast = Toast;
  Vue.prototype.modal = Modal;

  Vue.prototype.$Indicator = Indicator;
  Vue.prototype.$Alert = Alert;
  Vue.prototype.$Confirm = Confirm;
};

if (typeof window !== 'undefined' && window.Vue) {
  // install(Vue);
}

export default Object.assign({}, Components, { install });
