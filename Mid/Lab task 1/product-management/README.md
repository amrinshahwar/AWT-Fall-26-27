# Product Management API — Lab Task 1

A NestJS REST API for managing products and employees using PostgreSQL and TypeORM.

## Student Details

- **SL:** []
- **Name:** Amrin Shahwar
- **Student ID:** 23-53045-3
- **Section:** E

## Prerequisites

- Node.js
- pnpm v10
- PostgreSQL
- DBeaver
- Postman for testing

## Database Setup

1. Start PostgreSQL.
2. In DBeaver, connect to your PostgreSQL server.
3. Create a database named `product_management`.
4. Copy `.env.example` to `.env`:

   ```powershell
   Copy-Item .env.example .env
   ```

5. Update the database settings in `.env`:

   ```env
   PORT=5001
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=your_postgresql_password
   DB_DATABASE=product_management
   ```

6. Configure any other settings required by the boilerplate using `.env.example`.

Do not commit the real `.env` file.

## Installation and Running

Open a terminal inside the project folder containing `package.json`.

Install dependencies:

```powershell
pnpm install
```

Run database migrations to create the tables:

```powershell
pnpm migration:run
```

Start the development server:

```powershell
pnpm start:dev
```

- **API base URL:** http://localhost:5001
- **Swagger documentation:** http://localhost:5001/api

## Product Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/products` | Create a product |
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a product by ID |
| PATCH | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

### Example Product Request

Send a POST request to `/products` with a JSON body:

```json
{
  "name": "Pen",
  "category": "Stationery",
  "price": 15,
  "quantity": 100
}
```

The database generates the product ID.

## Employee Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/employees` | Create an employee |
| GET | `/employees` | Get all employees |
| GET | `/employees/:id` | Get an employee by ID |
| PATCH | `/employees/:id` | Update an employee |
| DELETE | `/employees/:id` | Delete an employee |

### Example Employee Request

Send a POST request to `/employees` with a JSON body:

```json
{
  "name": "Test Employee",
  "email": "employee@example.com",
  "phone": "01712345678",
  "password": "Dummy123!",
  "age": 25,
  "yearsOfWorking": 2
}
```

The database generates the employee ID. Passwords are dummy values for this lab.

## Testing

Use Postman with **Body → raw → JSON** for POST and PATCH requests.

Replace `:id` in request URLs with an actual ID returned by the API.

For PATCH requests, send only the fields to update.

Postman screenshots are included in the `screenshots/` folder.
