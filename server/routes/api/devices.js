const express = require("express");
const router = express.Router();

// Controllers
const deviceController = require("../../controllers/deviceController");
const categoryController = require("../../controllers/categoryController");

// @route GET categories api/devices/category
// @asc Get All device categories
// @access ....
router.get("/category", categoryController.getCategories);

// @route GET category api/devices/category/:id
// @asc Get category details
// @access ....
router.get("/category/:id", categoryController.getCategoryDetails);

// @route GET devices api/devices/device
// @asc Get All device categories
// @access ....
router.get("/device", deviceController.getDevices);

// @route GET device api/devices/device:id
// Get device details
router.get("/device/:id", deviceController.getDeviceDetails);

// @route GET device api/devices/device-category
// Get device by category
router.get("/device-category", deviceController.getDeviceByCategory);

// @route POST api/devices/category
router.post("/category", categoryController.addCategory);

// @route POST api/devices/device
router.post("/device", deviceController.addDevice);

module.exports = router;
