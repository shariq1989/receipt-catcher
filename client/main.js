import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeteorTracker from 'vue-meteor-tracker';
import '../imports/ui/plugins';
import App from '../imports/ui/App.vue'
Vue.use(VueRouter);
Vue.use(VueMeteorTracker);

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
    path: '/receipts/receiptId',
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
