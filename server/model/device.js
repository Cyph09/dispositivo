const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DeviceSchema = new Schema({
  model: {
    type: String,
    required: true
  },
  productNo: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    require: true
  },
  yearManufactured: {
    type: Number,
    require: true
  },
  datePurchased: {
    type: Date,
    required: true,
    default: Date.now
  }
});

// Export Model
module.exports = mongoose.Model('Device', DeviceSchema);