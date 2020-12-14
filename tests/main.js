import assert from "assert";
import {Meteor} from "meteor/meteor";
import {Receipts, runFetch} from "../imports/api/collections/Receipts";
import VueRouter from "vue-router";
import {createLocalVue} from '@vue/test-utils';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('/imports/ui/components/Upload.vue'),
    },
    {
        path: '/receipts',
        name: 'receipts',
        component: () => import('/imports/ui/components/Display.vue'),
    },
    {
        path: '/receipts/receiptId',
        name: 'receiptDetails',
        component: () => import('/imports/ui/components/ReceiptDetails.vue'),
    },
    {
        path: '*',
        name: 'notfound',
        component: () => import('/imports/ui/components/NotFound.vue')
    },
]; //I know this is bad code, but it won't import/export correctly from '../client/main.js', so here we are.
const localVue = createLocalVue();
localVue.use(VueRouter);


describe("receipt-catcher", function () {
    this.timeout(100000);
    it("package.json has correct name", async function () {
        const {name} = await import("../package.json");
        assert.strictEqual(name, "receipt-catcher");
    });
    if (Meteor.isClient) {
        it("client is not server", function () {
            assert.strictEqual(Meteor.isServer, false);
        });
        it("router is routing to root", async function () {
            const router = new VueRouter({routes}); //create test router based on real routes
            //const wrapper = mount(App, {localVue, router}); //make test App
            await router.push('/') //go to root path
            assert(window.location.pathname === '/') //check for Upload component at root path as expected.
        });
    }

    if (Meteor.isServer) {
        it("server is not client", function () {
            assert.strictEqual(Meteor.isClient, false);
        });
        it("request collection exists", async function () {
            let collection;
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
                fileName: 'large img'
            }, function (writeError, fileRef) {
                if (writeError) {
                    throw writeError;
                } else {
                    assert(fileRef._id !== null);
                }
            });
        });
        it("insert pdf", async function () {
            // Upload sample files on server's startup:
            Receipts.load('http://www.africau.edu/images/default/sample.pdf', {
                fileName: 'pdf file'
            }, function (writeError, fileRef) {
                if (writeError) {
                    throw writeError;
                } else {
                    assert(fileRef._id !== null);
                }
            });
        });
        it("delete image", function (done) {
            // need this timeout because we need to wait until the images are uploaded
            setTimeout(async function () {
                // get all files in test db
                let result = runFetch();
                // get the id of the first one
                const id = result[0]._id;
                // remove file by id
                Receipts.remove({id: id});
                // check to see if its still in the db
                result = runFetch({id: id});
                // it shouldn't be there, result will be empty
                assert(result.length === 0);
                done();
            }, 3000)
        });
        it("runFetch provided no parameters", function () {
            // get all files in test db
            let result = runFetch();
            assert(result.length > 0);
        });
        it("runFetch provided a single parameter", function () {
            // get all files in test db
            let result = runFetch({isImage: true});
            assert(result[0].isImage === true);
            assert(result.length > 0);
        });
        it("runFetch provided multiple parameters", function () {
            // get all files in test db
            let result = runFetch({isImage: true, size: {$gt: 2000}});
            assert(result[0].isImage === true);
            assert(result[0].size > 2000);
            assert(result.length > 0);
        });
        it("runFetch returns no results", function () {
            // get all files in test db
            let result = runFetch({_id: 'SHARIQ1989!'});
            assert(result.length === 0);
        });
        it("FilesCollection isImage function", function () {
            // get all files in test db
            let result = runFetch({name: 'jpeg img'});
            // get the id of the first one
            const isImage = result[0].isImage;
            assert(isImage === true);
        });
        it("FilesCollection isPDF function", function () {
            // get all files in test db
            let result = runFetch({name: 'pdf file'});
            // get the id of the first one
            const isPDF = result[0].isPDF;
            assert(isPDF === true);
        });
        it("update receipt", function (done) {
            // name that a file will be updated to
            const new_name = 'updated_name';
            // update name for receipts named 'jpeg img'
            Receipts.update({name: 'jpeg img'}, {
                $set: {
                    name: new_name
                }
            })
            // need this timeout because we need to wait until the receipt is updated
            setTimeout(async function () {
                // fetch any receipts named 'jpeg image'
                let result = runFetch({name: new_name});
                // there should have been at least one receipt with the new name
                assert(result[0].name === new_name);
                done();
            }, 3000)
        });
        it("bdd delete check", function () {
            // fetch logo.png
            let result = runFetch({name: 'logo.png'});
            // extract file id and user id
            const id = result[0]._id;
            let user = result[0].userId;
            // if user is null, it was uploaded by test automation
            if (user === undefined || user === null) {
                user = 'Test Automation';
            }
            console.log('Given that a file (id:' + id + ') was uploaded by a user ' + user);
            console.log('When the user (' + user + ') tries to delete the file (id:' + id + ')');
            Receipts.remove({id: id});
            console.log('That the file (id:' + id + ') will no longer exist');
            result = runFetch({id: id});
            assert(result.length === 0);
        });
    }
});
