import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';
import axios from 'axios';
import localProducts from '../data/product.json';

const Dashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');

  useEffect(() => {
    // Simulate loading from local JSON
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try{
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/products' , {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const totalProducts = [...res.data, ...localProducts];
      setProducts(totalProducts);
    }catch(error){
      console.error("Error fetching products:", error);
    }
  }

  const filteredProducts = products.filter( product => 
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Inventory Management System</h1>
        <button onClick={() => navigate('/addProduct')} className="dashboard-button">
          Add Product
        </button>
      </div>

      <div className="search-container">
        <input 
        type="text" 
        placeholder="Search Products..."
        value={searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
        className="search-input"
        />
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? filteredProducts.map((prod, idx) => (
          <div key={idx} className="product-card">
            <img src={prod.imgURL} alt={prod.name} />
            <button>-</button>
            <button>Quantity</button>
            <button>+</button>
            <h3>{prod.name}</h3>
            <p><b>Price:</b> ₹{prod.price}</p>
            <p><b>Qty:</b> {prod.quantity}</p>
            <p className="desc">{prod.description}</p>
          </div>
        )) : (
          <p style={{textAlign: 'center', width: '100%'}}>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
