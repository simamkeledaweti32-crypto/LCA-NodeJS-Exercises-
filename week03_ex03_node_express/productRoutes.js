const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET all products
router.get('/', productController.getAllProducts);
// GET product by id
router.get('/:id', productController.getProductById);
// POST create product
router.post('/', productController.createProduct);
// PUT update product
router.put('/:id', productController.updateProduct);
// DELETE product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
