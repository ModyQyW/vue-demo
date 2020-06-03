import Vue from 'vue';
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  DatePicker,
  Form,
  FormItem,
  Header,
  Icon,
  Input,
  Main,
  Menu,
  MenuItem,
  Message,
  MessageBox,
  Notification,
  Option,
  Row,
  Select,
} from 'element-ui';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Card);
Vue.use(Col);
Vue.use(Container);
Vue.use(DatePicker);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Header);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Main);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Option);
Vue.use(Row);
Vue.use(Select);
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.component(CollapseTransition.name, CollapseTransition);
locale.use(lang);
