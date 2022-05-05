//import controllers review, products
const productController = require('../controllers/productController')
const reviewController = require('../controllers/reviewController')

//router
const router = require('express').Router()


// use routers
router.post('/addProduct',productController.addProduct)

router.get('/allProducts',productController.getAllProducts)

router.get('/published',productController.getPublishedProducts)

//Review Url and Controller
router.post('/addReview',reviewController.addReview)
router.get('/allReview',reviewController.getAllReviews)

// Products router
router.get('/:id',productController.getOneProduct)

router.put('/:id',productController.updateProduct)

router.delete('/:id',productController.deleteProduct)

module.exports = router

