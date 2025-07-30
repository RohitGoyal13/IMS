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
## 🐳 Docker Setup

To containerize and run this backend using Docker:

### 1. 🏗️ Build the Docker Image
Make sure you are in the root project directory (`ims-backend`), then run:
```bash
docker build -t ims-backend .
```

### 2. 🧾Create a .env File
Before running the container, ensure there is a .env file in the root with the following content:
```bash
PORT=5000
MONGO_URI=<your MongoDB URI>
JWT_SECRET=mysecretkey123
```
You can also provide a .env.example file for reference.

### 3. 🚀 Run the Docker Container
Run the container using:
```bash
docker run -d --name ims-backend-container -p 5000:5000 --env-file .env ims-backend
```
This will:
- Start the container in **detached** mode  
- Map port `5000` of your host to the container  
- Inject environment variables from `.env`

### 4. 🔍 Verify the Container
To check if the container is running:
```bash
docker ps
```
### 5. Test with Postman
1. Open Postman → Import → choose `IMS.postman_collection.json`.  
2. In the collection, open the **Login** request → **Send**.  
3. Copy the returned `token`.  
4. Open any protected endpoint (e.g., **Get All Products**).  
5. In the **Authorization** tab, select **Bearer Token** and paste the copied token.  
6. **Send** the request to verify the API works.





