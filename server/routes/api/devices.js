const express = require('express');
const router = express.Router();

// Controllers
const deviceController = require('../../controllers/deviceController');
const categoryController = require('../../controllers/categoryController');

// @route GET categories api/devices/category
// @asc Get All device categories
// @access ....
router.get('/category', categoryController.getCategories);

// @route GET devices api/devices/device
// @asc Get All device categories
// @access ....
router.get('/device', deviceController.getDevices);

// @route POST api/devices/category
router.post('/category', categoryController.addCategory);

// @route POST api/devices/device
router.post('/device', deviceController.addDevice);

module.exports = router;