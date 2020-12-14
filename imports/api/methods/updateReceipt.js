import { Meteor } from 'meteor/meteor';
import Receipts from '../collections/Receipts.js';

Meteor.methods({
  updateReceipt(receiptId){
    const file = Receipts.findOne({_id: receiptId});
    currentData = file.fetch();
    return currentData
  },
});
