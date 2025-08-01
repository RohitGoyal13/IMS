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
      
      const totalProducts = [
        ...res.data.map( p => ({ ...p , source: 'db' }))
        , ...localProducts.map( (p,idx)=> ({ ...p , source: 'local', _id: `local-${idx}`}))
      ];
      setProducts(totalProducts);
    }catch(error){
      console.error("Error fetching products:", error);
    }
  }

  const filteredProducts = products.filter( product => 
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  const handleQuantitychange = async (id, change) => {
      setProducts(prev => 
        prev.map( prod => {
          if(prod._id === id){
            const newqty = Math.max(0, prod.quantity + change);
            return {
              ...prod,
              quantity: newqty
            }
          }
          return prod;
        })
      )

      const targetProduct = products.find( prod => prod._id === id);

      if(targetProduct && targetProduct.source === 'db'){
        try{
          const token = localStorage.getItem('token');
          await axios.put(
             `http://localhost:5000/api/products/${id}/quantity`,
             {quantity : targetProduct.quantity + change},
             {headers : { Authorization : `Bearer ${token}`}}
            )
        }catch(err){
          console.error("Error while updating the quantity:", err);
        }
      }
  }

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
            <button onClick={ () => handleQuantitychange(prod._id, -1)} className="quantity-button-1">-</button>
            <button className="quantity-button-2">Quantity</button>
            <button onClick={ () => handleQuantitychange(prod._id, 1)} className="quantity-button-3">+</button>
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
