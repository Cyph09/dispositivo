// Variables and imports
const mongoose = require('mongoose');
const Category = require('../models/category');
const Device = require('../models/device');

// Get all categories
exports.getCategories = (req, res) => {
  Category.find()
    .sort({ name: 1 })
    .then(categories => res.json(categories))
}
// Category details

// Add category
exports.addCategory = (req, res) => {
  const newCategory = new Category({
    name: req.body.name
  });

  newCategory.save().then(category => res.json(category));
}
// Remove/delete category

// Update Category