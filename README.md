# 🚀 DevPulse API

A collaborative backend platform for software teams to report bugs, suggest features, and manage issue resolutions efficiently.

Built with **Node.js**, **Express.js**, **TypeScript**, and **PostgreSQL** following a clean and modular architecture.

---

# 👨‍💻 Author

## Md Shoaib

---

# 🌐 Live API

```bash
https://devpulse-a2.vercel.app/
```
# 📂 GitHub Repository
```bash
https://github.com/Mdshoaib77/devpulse-api
```
#  Features

- 🔐 JWT Authentication & Authorization
- 👥 Contributor & Maintainer Roles
- 🐞 Create Bug Reports
- 💡 Create Feature Requests
- 📋 Get All Issues with Filtering & Sorting
- 🔍 Get Single Issue Details
- ✏️ Update Issues
- ❌ Delete Issues
- 🔒 Protected Routes with JWT Verification
- 🧂 Password Hashing using bcrypt
- 🗄️ PostgreSQL Database Integration
- ⚡ Raw SQL Queries using `pg`
- 🧱 Modular Backend Architecture
- 🚨 Centralized Error Handling
- ✅ Input Validation System

# 🛠️ Technology Stack

| Technology    | Usage                         |
| ------------- | ----------------------------- |
| Node.js       | Backend Runtime               |
| Express.js    | Server Framework              |
| TypeScript    | Type Safety                   |
| PostgreSQL    | Relational Database           |
| pg            | PostgreSQL Driver             |
| bcrypt        | Password Hashing              |
| jsonwebtoken  | JWT Authentication            |
| dotenv        | Environment Variables         |
| cors          | Cross-Origin Resource Sharing |
| cookie-parser | Cookie Handling               |

# 🔐 Authentication System

DevPulse uses **JWT Authentication**.

### Authentication Flow

```bash
Client Login → Server Verifies User → JWT Generated → 
Client Stores Token → Token Sent in Authorization Header →
Server Verifies JWT
```

### Authorization Header

```bash
Authorization: your_jwt_token
```
# 👥 User Roles

| Role        | Permissions                                        |
| ----------- | -------------------------------------------------- |
| contributor | Create Issues, View Issues                         |
| maintainer  | All contributor permissions + Update/Delete Issues |

