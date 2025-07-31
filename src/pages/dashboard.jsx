import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';
import productData from '../data/product.json';

const Dashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate loading from local JSON
    setProducts(productData);
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Inventory Management System</h1>
        <button onClick={() => navigate('/addProduct')} className="dashboard-button">
          Add Product
        </button>
      </div>

      <div className="product-grid">
        {products.map((prod, idx) => (
          <div key={idx} className="product-card">
            <img src={prod.image_url} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p><b>Price:</b> ₹{prod.price}</p>
            <p><b>Qty:</b> {prod.quantity}</p>
            <p className="desc">{prod.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
