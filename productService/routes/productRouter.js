const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/', productController.getProducts);

router.get('/:idOrName', productController.findProduct);
//add comment
router.post('/', productController.createProduct);

module.exports = router;