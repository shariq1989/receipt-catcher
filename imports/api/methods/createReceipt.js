import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Receipts from '../collections/Receipts.js';

Meteor.methods({
  createReceipt(obj){
    check(obj.file,Files);
    check(obj.Category,String);
    check(obj.Total,Number);
    check(obj.Date,Date);
    check(obj.Store,String);

    return Receipts.insert({
      file: obj.file,
      meta: {
        "category": obj.Category,
        "date": obj.Date,
        "storeName": obj.Store,
        "totalSpent": obj.Total,
      },
      streams: 'dynamic',
      chunkSize: 'dynamic',
    }, false)
  },
});
