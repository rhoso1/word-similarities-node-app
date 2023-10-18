# Word-Similarities Node.js App

This Node.js application provides an API for searching word similarities based on predefined word pairs. It includes a controller, model, repository, and routes for managing and retrieving word pair data.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)

## Features

- **Word Pair Management:** Add and retrieve word pairs for word similarity search.
- **Persistence:** Word pairs are stored in a JSON file for persistence.
- **RESTful API:** Exposes RESTful endpoints for interacting with word pairs.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rhoso1/word-similarities-node-app
   cd word-similarities-node app

2. Install dependencies:
npm install

Run the application:
node server.js / npm start

The application will be accessible at http://localhost:8080/.

3. Usage
The application provides a RESTful API for managing and retrieving word pairs. See API Endpoints for details.

4. API Endpoints
Add a New Word Pair
URL: /api/wordpairs/add-word

Method: POST
Request Body:
{
  "initialWord": "clean",
  "similarWord": "wash"
}

Get All Word Pair Groups
URL: /api/wordpairs/all-words

Method: GET
Response:
[
  ["clean", "wash"],
  ["happy", "joyful", "pleased", "cheerful"],
  // Other word pairs
]

4. Deployment
This app is deployed to Render. You can use the following url to access: https://word-similarities-backend-ah6m.onrender.com


