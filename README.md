# Product Store

**Product Store** is a simple MERN app allowing users to create, update, and delete products. Designed for efficiency and responsive design.

## Features

- Create, update, and delete products.
- Fully responsive design for optimal user experience.
- Lightweight and efficient.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Dependencies

### Core Dependencies

- **dotenv**: Used for managing environment variables securely.
- **express**: A web application framework for handling routes and API requests.
- **mongoose**: An ODM (Object Data Modeling) library for MongoDB, used to interact with the database.

### DevDependencies

- **cross-env**: Allows setting environment variables across platforms.
- **nodemon**: Automatically restarts the server when file changes are detected during development.

## Scripts

- **`dev`**: Runs the application in development mode with `nodemon`, allowing auto-restart on file changes.
  ```bash
  cross-env NODE_ENV=development nodemon backend/server.js
  ```
- **`build`**: Installs dependencies for both backend and frontend and builds the frontend.
  ```bash
  npm install && npm install --prefix frontend && npm run build --prefix frontend
  ```
- **`start`**: Runs the application in production mode.
  ```bash
  cross-env NODE_ENV=production node backend/server.js
  ```

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/username/productstore.git
   ```
2. Navigate to the project directory:
   ```bash
   cd productstore
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application in development mode:
   ```bash
   npm run dev
   ```

## Folder Structure

- **backend**: Contains server-side code (Express and MongoDB).
- **frontend**: Contains client-side code (React).
