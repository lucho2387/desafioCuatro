const express = require('express')
const router = express.Router()

const {
    getProducts,
    searchProduct, 
    addProduct, 
    updateProduct, 
    deleteProduct
} = require('../controller/controllerProducto')


router.route('/')
    .get(getProducts)
    .post(addProduct)

router.route('/:id')
    .get(searchProduct)
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router