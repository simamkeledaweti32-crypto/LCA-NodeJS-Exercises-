# TechCraft Solutions - MySQL Exercise

Node.js application connected to MySQL using `mysql2` package.

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create `.env` file from `.env.example` and update your credentials
4. Run setup to create database and table:
```bash
node setup.js
```
5. Run the app:
```bash
node index.js
```

## Files

- `db.js` - MySQL connection
- `setup.js` - Creates database and users table
- `index.js` - Sample insert and select
- `.env.example` - Environment variables template

## Database

- Database: techcraft_db
- Table: users (id, name, email, created_at)
