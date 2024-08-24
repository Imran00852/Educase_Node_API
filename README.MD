# Educase School API

A Node.js API to add and sort schools based on proximity to the user's location.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)


## Features

- Add a new school to the database.
- Fetch all schools from the database and sort them based on proximity to the user's location using the Haversine formula.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/school-finder-api.git
   cd school-finder-api
2. **Install Dependencies**
   ```bash
   npm install
3. **Configuration**
- Create a .env file in the root directory with your MySQL database credentials.
  ```bash
  PORT=your_port_number
  DB_HOST=localhost
  DB_USER=your_username
  DB_PASSWORD=your_password
  DB_NAME=your_database_name

 ## API Endpoints

1. ### Add School

- **Endpoint:** `/api/addSchool`
- **Method:** `POST`
- **Description:** Adds a new school to the database.

#### Request Body
```json
{
  "name": "New School",
  "address": "1234 Education St, Learning City",
  "latitude": 12.9716,
  "longitude": 77.5946
}
```
#### Response

- **Status:** `201 CREATED`
- **Content-Type:** `application/json`
- **Body:**
 ```json
  {
    "message": "School added successfully"
  }
```
### 2. List Schools

- **Endpoint:** `/api/listSchools`
- **Method:** `GET`
- **Description:** Fetches all schools from the database, sorts them based on proximity to the user's location, and returns the sorted list.
#### Query Parameters
```json
{
  "latitude": 12.9716,
  "longitude": 77.5946
}
```
#### Example Request
```bash
GET /listSchools?latitude=12.9716&longitude=77.5946
```
#### Response

- **Status:** `200 OK`
- **Content-Type:** `application/json`
- **Body:**
 ```json
  
 [
  {
    "id": "school_1",
    "name": "School Name 1",
    "latitude": 12.9716,
    "longitude": 77.5946,
    "distance": 2.3
  },
  {
    "id": "school_2",
    "name": "School Name 2",
    "latitude": 13.0344,
    "longitude": 77.6101,
    "distance": 5.1
  }
  // More schools...
]
  
```
