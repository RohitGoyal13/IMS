import express from 'express';
import { addProduct , updateProductQuantity, getProducts } from '../controllers/productControllers.js';
import { protect } from '../middlewares/authmiddleware.js';

const router = express.Router();

router.post("/products", protect, addProduct);
router.put("/products/:id/quantity" , protect, updateProductQuantity);
router.get("/products" , protect, getProducts);

export default router;