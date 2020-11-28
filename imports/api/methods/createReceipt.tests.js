import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import Links from '../collections/Receipts.js';
import './methods.js';

if (Meteor.isServer) {
  describe('method: createReceipt', function () {
    beforeEach(function () {
      //Receipts.remove({});
    });

    it('can add a new receipt', function () {
      const addLink = Meteor.server.method_handlers['createLink'];

      addLink.apply({}, [{"file":File {name: "OR sample001.jpg", size: 312566},
        "category": "asdadsa",
        "date": "2020-11-26",
        "storeName": "sad",
        "totalSpent": "2323"}]);

      assert.equal(Receipts.find().count(), 1);
    });
  });
}
