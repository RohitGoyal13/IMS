import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
    name: String,
    type: String,
    sku: String,
    imgURL: String,
    description: String,
    price: Number,
    quantity: Number,
    },
    { timestamps: true }
);

export default mongoose.model("Product", productSchema);