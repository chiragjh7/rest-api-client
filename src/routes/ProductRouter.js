import express from 'express'
const router = express.Router()

// import all the controllers
import {
    createProduct,
    getAllProduct,
    getProduct,
    updateProduct,
    DeleteProduct
} from "../controllers/ProductController.js"


//  routes for product at /api/product
router.post('/create', createProduct)
router.get('/readAll', getAllProduct)
router.get('/read/:id', getProduct)
router.put('/update/:id', updateProduct)
router.delete('/delete/:id', DeleteProduct)

export {router as ProductRoute}