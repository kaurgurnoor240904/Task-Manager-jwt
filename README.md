# Task Manager (JWT, Node.js, MongoDB)

Simple REST API with secure JWT authentication.

## Endpoints
- `POST /api/auth/register` {name,email,password}
- `POST /api/auth/login` {email,password}
- `GET /api/tasks` (Bearer token)
- `POST /api/tasks` {title} (Bearer token)
- `DELETE /api/tasks/:id` (Bearer token)

## Run locally
```bash
npm install
cp .env.example .env   # fill MONGO_URI and JWT_SECRET
npm run dev
