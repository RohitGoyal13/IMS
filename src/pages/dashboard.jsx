import react, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"; 
import  '../styles/dashboard.css';


const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <div className='dashboard-container'>
            <h1>Welcome to the Dashboard</h1>
            <button onClick={ () => navigate('/addProduct')}> Add Product</button>
        </div>
    )
}

export default Dashboard;