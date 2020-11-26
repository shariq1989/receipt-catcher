import assert from "assert";
import {shallowMount} from '@vue/test-utils'
import {Meteor} from "meteor/meteor";
import {Receipts} from "../imports/api/collections/Receipts";
import {FilesCollection} from "meteor/ostrio:files";

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
});