# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy everything else
COPY . .

# Set environment variable for production
ENV NODE_ENV=production

# Expose the port from .env (fallback 5000)
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
