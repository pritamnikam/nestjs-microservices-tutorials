# NestJS Tutorial on Microservices

In this tutorial we will build microservices using NestJS framework and use MongoDB, RabbitMQ and Docker.

### Running all containerized app

All the modules are running independently in their docker containers. Communication is via events and messages using meesage broker platform RabbitMQ.

```bash
docker-compose up --build -V
```

### Running the API endpoints
Use insomnia to connect to the application

```text
1. Sign-up
POST http://localhost:3001/auth/users
Request: 
{
	"email": "test@example.com",
	"password": "12345"
}

Response:
{
	"_id": "644f8e15467b48de452a67fe",
	"email": "test@example.com",
	"password": "$2b$10$LUJSsPwGm/3UXDM0xCDFge0GzQzTZC.brBbHj0GflLjiE8uYGsfWO"
}

2. Login
POST http://localhost:3001/auth/login
Request: 
{
	"email": "test@example.com",
	"password": "12345"
}

Response:
{
	"_id": "644f8e15467b48de452a67fe",
	"email": "test@example.com",
	"password": "$2b$10$LUJSsPwGm/3UXDM0xCDFge0GzQzTZC.brBbHj0GflLjiE8uYGsfWO"
}

3. Create Order
POST http://localhost:3000/orders
Request:
{
	"name": "jeans",
	"price": 69.99,
	"phoneNumber": "+15883418372"
}

Response:
{
	"_id": "644f985c21cb2f8407ebf8f7",
	"name": "jeans",
	"price": 69.99,
	"phoneNumber": "+15883418372"
}

4. Get order
GET http://localhost:3000/orders/644f5b4822bf18126ce2cb24

Response:
{
	"_id": "644f5b4822bf18126ce2cb24",
	"name": "jeans",
	"price": 69.99,
	"phoneNumber": "+15883418372"
}



Tutorail ref: https://www.youtube.com/watch?v=yuVVKB0EaOQ
```