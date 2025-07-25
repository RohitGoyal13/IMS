import Product from '../models/product.js';

// Add a new product

export const addProduct = async (req,res) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        product_id : product._id,
        message: "Product added successfully"
    });
};

// Update the quantity of the products

export const updateProductQuantity = async (req, res) => {
    const {id} = req.params;
    const {quantity} = req.body;

    const updated = await Product.findByIdAndUpdate(
        id,{quantity},{new : true}
    );

    if(!updated){
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(updated);
};

// Get all products

export const getProducts = async (req,res) => {
    const products = await Product.find();
    res.json(products);
};