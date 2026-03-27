# ClinicFlow Backend 
## Overview
This repository  contains the Node.js/Express backend API for the ClinicFlow healthcare management system.
The backend manages:
- authentication
- patients records
- visit records
- apointments
- external API integration.

The backend serves data to the React `frontend application`.

## Frontend Repository:
 https://github.com/mbafousu/ClinicFlow-Frontend.git

## Features 
- RESTful API (CRUD operations)
- JWT Authentication
- Patient Management
- Visit Management
- Appointment Management
- Drug Lookup API (FDA integration)
- Error handling middleware

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
- GET /api/visits/:id
- POST /api/visits
- PUT /api/visits/:id
- DELETE /api/visits/:id

### Appointments 
- GET /api/appointments
- POST /api/appointments
- PUT /api/appointments/:id
- DELETE /api/appointments/:id

### Drug Lookup
GET /api/drugs?search=medication_name

## Tech Stack
- Node.js
-  Express.js
- MongoDB + Mongoose
- JWT Authentication
- REST API Architecture

## Environment Variables
```env
PORT=3001
MONGO_URI=your_connection_string
JWT_SECRET=your_secret

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
- https://github.com/mbafousu/ClinicFlow-Backend.git
- Navigate to the project: cd ClinicFlow Backend
### Install dependencies and Start the server
- npm install
- npm run dev


