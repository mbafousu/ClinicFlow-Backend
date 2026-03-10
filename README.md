# ClinicFlow Backend API
## Overview
This repository  contains the Node.js/Express backend API for the ClinicFlow healthcare management system.
The backend manages:
- authentication
- patients records
- visit records
- medication lookup via the FDA Drug API

The backend serves data to the React `frontend application`.

## Frontend Repository:
 https://github.com/mbafousu/ClinicFlow-Frontend.git

## Tech Stack
- Node.js

- Express

- MongoDB

- JSON Web Token (JWT)

- REST API Architecture

## Dependencies
### Install backend packages
npm install

### Main libraries:
- npm install express 
- npm install mongoose 
- npm install cors
- npm install dotenv 
- npm install jsonwebtoken

### Development dependency:
npm install nodemon --save-dev

## Installation
### Clone the repository
- git clone https://github.com/YOUR_USERNAME/CinicFlow-Backend.git
- Navigate to the project: cd ClinicFlow Backend
### Install dependencies and Start the server
- npm install
- npm run dev

## API Endpoints

### Authentication
- POST /api/auth/login 

### Patients
- GET /api/patients
- POST /api/patients
- PUT /api/patients/:id
- DELETE /api/patients/:id

### Visits
- GET /api/visits
- POST /api/visits

### Drug Lookup
GET /api/drugs?search=medication_name
