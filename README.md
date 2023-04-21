# Project CRUD

This project is a demo application that reads data from a CSV file and imports it into a MongoDB database. It provides CRUD operations for users, account, and policies. It also has different collections for Agent, User, User's Account, LOB, Carrier, Policy.

## Requirements

To run this application, you will need the following software:

- Node.js 
- MongoDB
- Postman

## Installation

To install and run this project, follow these steps:

1. Clone the repository:

https://github.com/pawankalyan107/testRepo.git
cd your-project


2. Install dependencies:

npm install


3. Start the application:


This will start the server and listen for incoming requests on `http://localhost:3001`.

4. Use a tool like Postman to test the API:

Open Postman and set up a new request.
Choose the appropriate HTTP method (GET, POST, PUT, DELETE) and enter the API endpoint

## Usage

To use this API, you can send requests to the following endpoints:

### Upload csv file to mongodb

- `POST /upload` - Uploads the csv file from postman

### User Api's

- `GET /users` - Get a list of all users
- `GET /users/:id` - Get a specific user by ID
- `POST /users` - Create a new user
- `PATCH /users/:id` - Update an existing user by ID
- `DELETE /users/:id` - Delete a user by ID

### Account Api's

- `GET /:id/account` - Get account for a given user ID
- `POST /:id/account` - Create a account for a given user ID
- `PATCH /:id/account/:accountId - Update the account by user ID and Account ID
- `DELETE /:id/account/:accountId - Delete the account by user ID and Account ID

### Policy Api's

- `GET /:id/policy` - Get policy for a given account ID
- `GET /user/:id/policy` - Get policy by a user ID
- `POST /:id/policy` - Create a policy for a given account ID
- `PATCH /:id/policy/:policyId` - Update a policy by account ID and policy ID
- `DELETE /:accountId/policy/:policyId` - Delete a policy by account ID and policy ID

When sending requests, make sure to include the necessary request body data, as described in the API documentation.

## Collections

This project uses MongoDB to store data in the following collections:

### Users

The `users` collection stores information about the users of the application, including their name, email, and password. Each document in the `users` collection has a unique `_id` field, which is generated automatically by MongoDB.

### Accounts

The `accounts` collection stores information about the accounts associated with each user. Each document in the `accounts` collection has a unique `_id` field, as well as a `userId` field that links it to the corresponding user document in the `users` collection.

### Policy 

The `policy` collection stores information about the policy associated with each account. Each document in the `policy` collection has a unique `_id` field, `accountId` field as well as a `userId` field that links it to the corresponding user and account documents in the `users` and `accounts` collection .The `policies` collection also includes fields for the policy type, coverage amount, expiration date etc.

similarly there are collections for `agent`, `carrier`, and `lob`.





