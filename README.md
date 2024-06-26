# CRUD Application Backend

This is the backend part of the CRUD application project built with Node.js and DynamoDB.

## Features
- Retrieve all posts
- Retrieve a single post by ID
- Create a new post
- Update an existing post by ID
- Delete a post by ID
- Error handling and validation

## Installation
1. Clone the repository:
    git clone https://github.com/AlbinQestaj/posts-api.git
2. Move to the directory:
    cd posts-api
3. Install dependencies:
    npm install
4. Start the server:
    npm start
5. Access the API:
    Open `http://localhost:3000` in your browser or use tools like Postman to interact with the API endpoints.

## Deployment
As suggested in the assignment, I deployed the backend on AWS EC2 and it's accessible via the following URL: `http://54.221.17.177:5000/api`
You can test the API using the following endpoints:
- `GET /posts`
- `GET /posts/:id`
- `POST /posts`
- `PUT /posts/:id`
- `DELETE /posts/:id`
