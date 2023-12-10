# A Simple Express js Server made with Mongoose & Typescript

This project was created with Typescript, Mongoose, Zod Validation

## Prerequisites

Before you begin, ensure you have the following requirements:

- Node.js and npm installed
- MongoDB installed and running
- Mongoose and Typescript Installed

## Installation Process

## Getting Started

Follow these steps to get your project up and running:

1. **Clone the repository:**

```bash
git clone https://github.com/koushik-ahmad/assignment-2-typescript-express-mongoose.git
```

2. **Navigate to the project folder:**

```
cd your-repository
```

3. **Install dependencies:**

```
npm install
```

4. **Configure environment variables:**
   Create a .env file in the project root and configure any necessary environment variables. For example:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/your-database
```

3. **Run the application:**

```
npm start
```

### Live API URL: https://assignment-2-typescript-express-mongoose.vercel.app/

## API Documentation

#### API Endpoints:

- POST /api/users
- GET /api/users
- GET /api/users/:userId
- PUT /api/users/:userId
- DELETE /api/users/:userId
- PUT /api/users/:userId/orders
- GET /api/users/:userId/orders
- GET /api/users/:userId/orders/total-price
