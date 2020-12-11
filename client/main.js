import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeteorTracker from 'vue-meteor-tracker';

import
  {
    Button,
    DatePicker,
    Form,
    FormItem,
    Icon,
    Input,
    Menu,
    MenuItem,
    Select,
    Table,
    TableColumn,
    Upload
  } from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

import '../imports/ui/plugins';
import App from '../imports/ui/App.vue';

// configure language
locale.use(lang);

Vue.use(VueRouter);
Vue.use(VueMeteorTracker);

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Input.name, Input);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Upload.name, Upload);
Vue.component(Icon.name, Icon);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('/imports/ui/components/Upload.vue'),
  },
  {
    path: '/receipts',
    name: 'receipts',
    component: ()=>import('/imports/ui/components/Display.vue'),
  },
  {
    path: '/receipts/:receiptId',
    name: 'receiptDetails',
    component: ()=>import('/imports/ui/components/ReceiptDetails.vue'),
  },
  {
    path: '*',
    name: 'notfound',
    component: ()=>import('/imports/ui/components/NotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

Meteor.startup(() => {
    new Vue({
        el: '#app',
        ...App,
        router: router,
    })
})
