# Inventory Management System Backend

This is a Node.js + Express + MongoDB backend for managing inventory products with JWT authentication.

## 🚀 Features
- User register/login with JWT
- Add product
- Update product quantity
- Fetch all products
- Protected routes with Bearer Token
- Swagger API Docs

## 🛠 Tech Stack
- Node.js, Express
- MongoDB (Atlas)
- JWT Authentication
- Swagger for API docs
- Postman for testing

## 🔧 Setup

1. Clone the repo  
   ```bash
   git clone <your-repo-url>
   cd ims-backend
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory  
   ```bash
   PORT=5000
   MONGO_URI=<your MongoDB Atlas URI>
   JWT_SECRET=mysecretkey123
   ```

4. Run the server  
   ```bash
   npm run dev
   ```

## 📡 APIs

- **POST** `/api/register` → Register a new user  
- **POST** `/api/login` → Login & get JWT token  
- **POST** `/api/products` → Add a product (**JWT required**)  
- **PUT** `/api/products/:id/quantity` → Update product quantity (**JWT required**)  
- **GET** `/api/products` → Get all products (**JWT required**)  

## 📖 API Docs

Swagger UI is available at:  
```
http://localhost:5000/api-docs
```

## ✅ Testing

You can use the included Postman collection:  
```
IMS.postman_collection.json
```
