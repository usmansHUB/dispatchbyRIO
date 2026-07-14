# DispatchByRIO Clone - MERN & Tailwind CSS

This is a premium MERN stack clone of the DispatchByRIO website, updated with a modern Black & White theme.

## Architecture

- **Frontend**: React (Vite) + Tailwind CSS + Framer Motion (SPA routed)
- **Backend**: Node.js + Express.js + Mongoose (MongoDB)
- **API**: Contact form submissions are stored in MongoDB

---

## Deployment Guide

Follow these steps to deploy the application to Vercel (Frontend) and Render (Backend).

### 1. Backend Deployment (Render)

1. Sign up/log in to [Render](https://render.com/).
2. Click **New** > **Web Service**.
3. Connect your Git repository.
4. Set the following configurations:
   - **Name**: `dispatchbyrio-backend` (or your preferred name)
   - **Runtime**: `Node`
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Click **Advanced** and add the following **Environment Variables**:
   - `MONGO_URI`: Your MongoDB Atlas connection string (e.g., `mongodb+srv://...`)
   - `PORT`: `10000` (Render's default)
6. Click **Create Web Service**. Once deployed, copy your backend URL (e.g., `https://dispatchbyrio-backend.onrender.com`).

---

### 2. Frontend Deployment (Vercel)

1. Sign up/log in to [Vercel](https://vercel.com/).
2. Click **Add New** > **Project**.
3. Import your Git repository.
4. Set the following configurations:
   - **Root Directory**: Select `client` (Very Important)
   - **Framework Preset**: `Vite` (automatically detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Open **Environment Variables** and add:
   - `VITE_API_URL`: Paste your Render backend URL (e.g., `https://dispatchbyrio-backend.onrender.com`) without a trailing slash.
6. Click **Deploy**. Vercel will build and host your frontend.

---

## Local Development

1. Install dependencies at the root level:
   ```bash
   npm run install-all
   ```
2. Start MongoDB locally.
3. Run both client and server concurrently:
   ```bash
   npm run dev
   ```
   - Frontend runs on: [http://localhost:3000](http://localhost:3000)
   - Backend API runs on: [http://localhost:5000](http://localhost:5000)
