import Button from './components/button';
import { ButtonGroup } from './components/button';
import Toast from './components/toast';
import Indicator from './components/indicator';
import Alert from './components/alert';
import Confirm from './components/confirm';
import Modal from './components/modal';
import Row from './components/row';
import Switch from './components/switch';
import Checkbox from './components/checkbox';
import { CheckboxItem } from './components/checkbox';
import Radiobox from './components/radiobox';
import { RadioboxItem } from './components/radiobox';

const Components = {
  Button,
  ButtonGroup,
  Switch,
  Checkbox,
  CheckboxItem,
  Radiobox,
  RadioboxItem,
  Row
};

const install = (Vue, opts = {}) => {
  // console.log('src.install', Vue);
  Object.keys(Components).forEach((key) => {
    Vue.component(`mp${key}`, Components[key]);
  });

  Vue.prototype.toast = Toast;
  Vue.prototype.modal = Modal;

  Vue.prototype.indicator = Indicator;
  Vue.prototype.alert = Alert;
  Vue.prototype.confirm = Confirm;
};

if (typeof window !== 'undefined' && window.Vue) {
  // install(Vue);
}

export default Object.assign({}, Components, { install });
