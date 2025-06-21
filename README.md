

# 📝 MERN Notes App

A full-stack **MERN** (MongoDB, Express, React, Node.js) application built with **Vite**, **Tailwind CSS**, **DaisyUI**, **Axios**, and **React Router**, featuring full **CRUD** functionality, **rate-limiting**, and **deployment-ready** configuration.

---

## 🚀 Demo


👉 [Click here to view the deployed app](https://note-taking-web-app-ofwi.onrender.com/)


### 🧠 What This App Does

> **MERN Notes App** is a full-stack application where users can:

* ✍️ Create new notes
* 📄 View all saved notes
* 📝 Edit existing notes
* ❌ Delete notes
* ⚡ Enjoy real-time feedback with toast notifications
* 🔐 Be protected with API rate limiting
* 📱 Use it seamlessly across devices (responsive design)

---
## 📦 Tech Stack


### 🔧 Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB ODM
- **CORS** – Cross-origin support
- **dotenv** – Environment variable management
- **Rate Limiting** – via Upstash Redis

### 🎨 Frontend
- **React (Vite)** – Frontend framework
- **Tailwind CSS 3.4.17** – Utility-first CSS
- **DaisyUI** – Tailwind component library
- **React Router DOM** – Routing
- **React Hot Toast** – Notifications
- **Axios** – API communication
- **Lucide React** – Icons

---

## 📁 Folder Structure

```
project/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
|   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
|   |   ├── lib/
│   │   ├── main.jsx
|   |   └── App.jsx
│   ├── public/
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
|
├── .gitignore
├── package.json
└── README.md
```
## Features

- 🗃️ **Create, Read, Update, Delete (CRUD)** notes
- 🔒 **Rate limiting** to prevent abuse
- 🎨 **Responsive UI** using TailwindCSS and DaisyUI
- 🛎️ **Notifications** using `react-hot-toast`
- 📦 Axios instance for clean API communication
- 🌍 Environment-based dynamic API URL setup
- ⚙️ Ready for **Render deployment**


## Installation

#### 1. Clone Repository
```bash
git clone https://github.com/vishalpatel7777/Note-Taking.git
cd Note-Taking
```
#### 2. Install All Dependencies
👉 In your project root:

```bash
npm run dev

```
#### 3. Other Dependencies

```bash
npm install mongoose@7.0.3 dotenv
npm i react-router-dom react-hot-toast axios lucide-react
npm i -D tailwindcss postcss autoprefixer daisyui@4.12.24

```

    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
```
PORT=
MONGO_URI= your_mongodb_connection_string
UPSTASH_REDIS_REST_URL= https://your-upstash-url
UPSTASH_REDIS_REST_TOKEN= your-upstash-token
```
## 🔐 Rate Limiting Middleware
A Redis-based rate limiter using Upstash prevents excessive API hits:
```
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"),
});
```
## Authors

Made with 💙 by **Vishal patel**

📧 Contact: [patelvishal14642@gmail.com](mailto:patelvishal14642@gmail.com)

---
✅ You can copy the full cleaned version above into your actual `README.md` file.  
Let me know if you want a downloadable `.md` file with images or a PDF version.

---