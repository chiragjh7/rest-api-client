# RESTful API Client Design

A RESTful API built with Express.js and Mongoose.

## Table of Contents

-   Overview
-   Features
-   Installation and Usage
-   API Endpoints
-   Dependencies

## Overview  
**RESTful API Client** is a simple and lightweight RESTful API built using the Express.js framework and Mongoose. It allows users to perform CRUD operations on Product and Category database through a series of HTTP requests. 

##  Features  
* **Create** - Create a new product and category using a POST request .  
* **Read** - Read an existing product and category(if exist) using a GET request.
* **Update** - Update an existing product using a PUT request.
* **Delete** - Delete an existing product using a DELETE request.
* **Error Handling** - Handle errors and return appropriate responses.

##  Installation and Usage 
* Clone this repository:  
`$ git clone https://github.com/chiragjh7/rest-api-client/ `
* Install dependencies using:  
`$ npm install `
* Create a `.env` file with your database URL and other environment variables.
* Start the server:  
`$ npm start `

The server should now be running on [http://localhost:3001](http://localhost:3001/). You can test the API using a tool like Postman or Thunder-client.

##  Configuration

The following environment variables need to be set for the project to run:

-   `MONGODB_URI`: The URI for the MongoDB database.
-   `PORT`: The port number on which the server will run.

##  Folder Structure  

REST-API-Client    
├── node_modules/           # contains project dependencies    
├── src/                    # contains the source code    
│   ├── configs/            # contains the configuration files like database connectivity     
│   ├── controllers/        # contains the application controllers     
│   ├── models/             # contains the application models     
│   ├── routes/             # contains the application routes     
│    ├── services/          # contains business logic for application controllers     
│   └── index.js              # main application file   
├── .gitignore              # specifies files to ignore in git    
├── package.json            # specifies project dependencies and scripts     
├── package-lock.json       # ensures consistent dependency versions across installations     
└──  README.md               # project documentation      


##  API Endpoints  
| HTTP Verbs | Endpoints | Action |  
| --- | --- | --- |  
| GET | /api/product/readAll | To retrieve all product and category (if exist) |  
| POST | /api/product/create | To create a new product and category(optional) |  
| PUT | /api/product/update/:productId | To edit an existing product |  
| GET | /api/product/read/:productId | To retrieve a particular product |  
| DELETE | /api/product/delete/:productId | To delete a specific product |

For more details on the API endpoints, please refer to the `routes` directory.


## Dependencies

-   Express.js
-   Mongoose
-   dotenv
