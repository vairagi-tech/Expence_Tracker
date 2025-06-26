# Architecture of Expense Tracker

## Backend
The backend is built using Node.js and Express. It handles API requests and interacts with the database to perform CRUD operations.

### Server
- The server is set up in `server.js` and listens for incoming requests.

### Controllers
- Controllers handle the logic for each route, processing requests and interacting with models.

### Models
- Models define the structure of the data and interact with the database.

## Frontend
The frontend is built using React and provides a user interface for interacting with the application.

### Components
- Components are organized in the `src` directory and manage the UI.

### State Management
- State is managed using React's built-in hooks for simplicity.

## Database
The application uses a NoSQL database to store transaction data. The schema is designed to efficiently manage user data and transactions.

## Architecture Diagram

```mermaid
graph TD;
    A[User] -->|Interacts with| B[Frontend (React)];
    B -->|Sends requests to| C[Backend (Node.js/Express)];
    C -->|CRUD operations| D[Database (NoSQL)];
    D -->|Returns data to| C;
    C -->|Sends responses to| B;
    B -->|Updates UI| A;
```

## Flow
1. The user interacts with the frontend to perform actions like adding or viewing transactions.
2. The frontend sends requests to the backend API.
3. The backend processes the requests, interacts with the database, and returns responses to the frontend.
4. The frontend updates the UI based on the backend responses.
