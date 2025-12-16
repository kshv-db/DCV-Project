# DCV Backend

Decentralized Credential Vault (DCV) backend skeleton.

## Tech Stack
- Node.js (Express)
- PostgreSQL (Prisma ORM)
- JWT authentication
- bcrypt password hashing
- Multer file uploads
- dotenv for config

## Setup
1. Copy `.env.example` to `.env` and fill in your values.
2. Install dependencies:
   ```
   npm install
   ```
3. Run Prisma migrations:
   ```
   npx prisma migrate dev --name init
   ```
4. Start the server:
   ```
   npm run dev
   ```

## Health Check
GET `/health` should return `{ status: 'ok' }`

## Folder Structure
- `src/` - Source code
- `prisma/` - Prisma schema
- `uploads/` - Uploaded files
