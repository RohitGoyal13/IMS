import react,{ useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import '../styles/addProduct.css';

const AddProduct = () => {
    const token = useSelector((state) => state.auth.token);
    console.log("Token from Redux:", token);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        type: '',
        sku: '',
        image_url: '',
        description: '',
        quantity: '',
        price: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if(response.ok){
                alert("Product added Successfully");
                navigate('/dashboard');
            }
            else{
                alert("Failed to add product: " + result.message || "Something went wrong");
            }
        }catch(error){
            console.error("Error adding product:", error);
            alert("Failed to add product. Please try again.");
        }
    };

    return(
        <div className="add-product-container">
            <form onSubmit={handleSubmit} className="add-product-form">
            <h2>Add Product</h2>
            <input type="text" name="name" placeholder='Enter Product Name' value={formData.name} onChange={handleChange} required />
            <input type="text" name="type" placeholder='Enter Product Type' value={formData.type} onChange={handleChange} required />
            <input type="text" name="sku" placeholder='Enter Product SKU' value={formData.sku} onChange={handleChange} required />
            <input type="text" name="image_url" placeholder='Enter Product Image URL' value={formData.image_url} onChange={handleChange} required />
            <textarea name="description" placeholder='Enter Product Description' value={formData.description} onChange={handleChange} required></textarea>
            <input type="number" name="quantity" placeholder='Enter Product Quantity' value={formData.quantity} onChange={handleChange} required />
            <input type="number" name="price" placeholder='Enter Product Price' value={formData.price} onChange={handleChange} required />
            <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;