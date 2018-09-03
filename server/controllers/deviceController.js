// Variables & imports
const mongoose = require("mongoose");
const Device = require("../models/device");
const Category = require("../models/category");

// Get all devices
exports.getDevices = (req, res) => {
  Device.find({})
    .populate("category", "name")
    .sort({ datePurchased: -1 })
    .then(devices => res.json(devices));
};
// Get device details
exports.getDeviceDetails = (req, res) => {
  Device.findById(req.params.id)
    .populate("category", "name")
    .then(device => res.json(device));
};

// Get device by category
exports.getDeviceByCategory = (req, res) => {
  const devices = Device.getCategoryList();
  res.json(devices);
};
// Add device
exports.addDevice = (req, res) => {
  const newDevice = new Device({
    model: req.body.model,
    productNo: req.body.productNo,
    brand: req.body.brand,
    category: req.body.category,
    yearManufactured: req.body.year,
    status: req.body.status,
    availability: req.body.availability,
    datePurchased: req.body.datePurchased
  });

  newDevice.save().then(device => res.json(device));
};

// Update device

// Delete device
