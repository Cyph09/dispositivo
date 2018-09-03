const mongoose = require("mongoose");
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
  category: {
    type: Schema.ObjectId,
    ref: "Category"
  },
  yearManufactured: {
    type: Number,
    require: true
  },
  status: {
    type: String,
    required: true,
    enum: ["Working", "Not Working"]
  },
  availability: {
    type: String,
    required: true,
    enum: ["Store", "In Use", "Maintanance"]
  },
  datePurchased: {
    type: Date,
    required: true,
    default: Date.now
  }
});

DeviceSchema.statics.getCategoryList = function() {
  return this.aggregate([{ $unwind: "$category" }]);
};
// Export Model
module.exports = Device = mongoose.model("Device", DeviceSchema);
