import assert from "assert";
import {Meteor} from "meteor/meteor";
import {Receipts} from "../imports/api/collections/Receipts";
import {FilesCollection} from "meteor/ostrio:files";
import Upload from "../imports/ui/components/Upload";
import App from '../imports/ui/App.vue';
import VueRouter from "vue-router";
import {createLocalVue, mount, shallowMount } from '@vue/test-utils';

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
]; //I know this is bad code, but it won't import/export correctly from '../client/main.js', so here we are.
const localVue = createLocalVue();
localVue.use(VueRouter);


describe("receipt-catcher", function () {
    it("package.json has correct name", async function () {
        const {name} = await import("../package.json");
        assert.strictEqual(name, "receipt-catcher");
    });
    if (Meteor.isClient) {
        it("client is not server", function () {
            assert.strictEqual(Meteor.isServer, false);
        });
    }

    if (Meteor.isServer) {
        it("server is not client", function () {
            assert.strictEqual(Meteor.isClient, false);
        });
    }
    it("request collection exists", async function () {
        let collection = null;
        collection = Receipts.collection;
        assert(collection !== null);
    });
    it("insert png", async function () {
        // Upload sample files on server's startup:
        Receipts.load('https://raw.githubusercontent.com/VeliovGroup/Meteor-Files/master/logo.png', {
            fileName: 'logo.png'
        }, function (writeError, fileRef) {
            if (writeError) {
                throw writeError;
            } else {
                assert(fileRef._id !== null);
            }
        });
    });
    it("insert jpeg", async function () {
        // Upload sample files on server's startup:
        Receipts.load('https://image.shutterstock.com/image-vector/credit-card-icon-600w-397400254.jpg', {
            fileName: 'jpeg img'
        }, function (writeError, fileRef) {
            if (writeError) {
                throw writeError;
            } else {
                assert(fileRef._id !== null);
            }
        });
    });
    it("insert gif", async function () {
        // Upload sample files on server's startup:
        Receipts.load('https://media3.giphy.com/media/BfbUe877N4xsUhpcPc/giphy.gif?cid=ecf05e47olmz6aso6rvn28w3dy8401e7jqs2auavdfpmx0rf&rid=giphy.gif', {
            fileName: 'gif img'
        }, function (writeError, fileRef) {
            if (writeError) {
                throw writeError;
            } else {
                assert(fileRef._id !== null);
            }
        });
    });
    it("insert large image", async function () {
        // Upload sample files on server's startup:
        Receipts.load('https://upload.wikimedia.org/wikipedia/commons/4/4e/Pleiades_large.jpg', {
            fileName: 'gif img'
        }, function (writeError, fileRef) {
            if (writeError) {
                throw writeError;
            } else {
                assert(fileRef._id !== null);
            }
        });
    });
    /*it("TBD Update Test", async function(){
      // 1. Upload pre-defined test case
      // 2. Modify (1) through update method
      // 3. Check for updates in pre-defined test case
    });
    it("routerTestRoot",  async function(){
      const router = new VueRouter({routes}); //create test router based on real routes
      //const wrapper = mount(App, {localVue, router}); //make test App
      router.push('/') //go to root path
      assert(window.location.pathname=='/') //check for Upload component at root path as expected.
    });*/
});
