const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeviceInstanceSchema = new Schema({
  device: {
    type: Schema.ObjectId,
    ref: 'Device',
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Working', 'Not Working']
  },
  availability: {
    type: String,
    required: true,
    enum: ['Store', 'In Use', 'Maintanance']
  }
});

// Export Model
module.exports = mongoose.Model('DeviceInstance', DeviceInstanceSchema);