import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authroutes.js';   
import productRoutes from './routes/productRoutes.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';


dotenv.config();

const app = express();
const swaggerDocument = YAML.load('./swagger.yaml');
app.use(express.json()); 
app.use(cors());
app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/' , (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => console.log('Server is running on port', PORT));
});

