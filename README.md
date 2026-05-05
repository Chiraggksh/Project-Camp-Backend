# 🚀 Project Camp Backend

> A production-grade RESTful API for collaborative project management with secure authentication, role-based access control, and scalable architecture.

Project Camp Backend is a **real-world backend system** built to demonstrate how modern products handle authentication, authorization, project collaboration, and structured data flow. It is designed with **clean architecture, security best practices, and scalability** in mind.

---

## ✨ Why Project Camp?

Most backend projects stop at basic CRUD. **Project Camp goes beyond that**.

This project focuses on:

* 🔐 **Complete authentication lifecycle** (email verification, refresh tokens, password reset)
* 🛡️ **Strict role-based access control (RBAC)**
* 🧠 **Real project workflows** (projects → tasks → subtasks → notes)
* 📦 **File uploads & metadata handling**
* 🧩 **Extensible, production-style API design**

---

## 🎯 Key Features

### 🔐 Authentication & Security

* JWT-based authentication (access + refresh tokens)
* Email verification flow
* Forgot & reset password system
* Secure password change
* Protected routes with middleware

### 👥 Role-Based Access Control

Three-tier permission system:

* **Admin** – Full system control
* **Project Admin** – Project-level task control
* **Member** – Task & subtask updates

### 📁 Project Management

* Create, update & delete projects
* View accessible projects with member details
* Admin-only project lifecycle control

### ✅ Task & Subtask Management

* Tasks with assignees and status tracking
* Subtasks with completion tracking
* Role-based task & subtask permissions

### 📝 Project Notes

* Admin-only note creation & editing
* Read access for all project members

### 📎 File Attachments

* Multiple file uploads per task
* Secure handling using Multer
* Metadata tracking (URL, size, MIME type)

### 🩺 Health Monitoring

* Dedicated health check endpoint

---

## 🧱 Tech Stack

* **Node.js** – Runtime
* **Express.js** – API framework
* **MongoDB** – Database
* **Mongoose** – ODM
* **JWT** – Authentication
* **Multer** – File uploads
* **Nodemailer** – Email services

---

## 🔗 API Base URL

```
/api/v1
```

---

## 📂 API Overview

### 🔑 Auth

`/auth/register` • `/auth/login` • `/auth/refresh-token` • `/auth/verify-email`

### 📁 Projects

`/projects` • `/projects/:projectId` • `/projects/:projectId/members`

### ✅ Tasks & Subtasks

`/tasks/:projectId` • `/tasks/:projectId/t/:taskId`

### 📝 Notes

`/notes/:projectId`

### 🩺 Health

`/healthcheck`

---

## 🔐 Permission Matrix

| Feature               | Admin | Project Admin | Member |
| --------------------- | ----- | ------------- | ------ |
| Create Project        | ✅     | ❌             | ❌      |
| Manage Members        | ✅     | ❌             | ❌      |
| Create / Update Tasks | ✅     | ✅             | ❌      |
| View Tasks            | ✅     | ✅             | ✅      |
| Update Subtask Status | ✅     | ✅             | ✅      |
| Notes Management      | ✅     | ❌             | ❌      |

---

## 🗂️ Core Data Models

### Roles

* `admin`
* `project_admin`
* `member`

### Task Status

* `todo`
* `in_progress`
* `done`

---

## 🔒 Security Highlights

* Token-based authentication
* Refresh token rotation
* Input validation on all routes
* Secure email workflows
* CORS configuration

---

## 📌 Project Goals

* Build a **real backend**, not a demo
* Follow **industry-grade security practices**
* Demonstrate **scalable API design**
* Be easy to integrate with any frontend

---

## 🚧 Future Enhancements

* Real-time notifications (WebSockets)
* Activity logs & audit trails
* Docker & CI/CD setup
* Swagger / OpenAPI documentation

---

## 👨‍💻 Author

**Chirag Kaushik**
Backend Developer | MERN Stack | API Design

---

⭐ If this project helped you, consider starring the repository!
