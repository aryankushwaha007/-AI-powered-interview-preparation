# GeniAI Interview Coach

![Banner](https://capsule-render.vercel.app/api?type=waving&height=220&color=0:0F2027,50:1E4F64,100:2C9F87&text=GeniAI%20Interview%20Coach&fontSize=44&fontColor=F5FBFF&animation=fadeIn&fontAlignY=38&desc=AI-powered%20resume%20analysis,%20interview%20questions,%20and%20preparation%20roadmap&descSize=15&descAlignY=58)

[![React](https://img.shields.io/badge/React-19-1f6feb?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-1572b6?logo=vite&logoColor=white)](https://vite.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-0e7c97?logo=node.js&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-2f7d53?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-0f766e?logo=google&logoColor=white)](https://ai.google.dev/)

A full-stack AI platform to help candidates prepare better for interviews using resume analysis, role-specific questioning, skill-gap detection, and an actionable preparation roadmap.

## Highlights

- Upload resume and combine it with self-introduction + job description
- Generate structured technical and behavioral interview questions
- Get match score and skill-gap severity insights
- Build a day-wise preparation plan
- Generate a tailored resume PDF

## Architecture

```mermaid
flowchart LR
    A[User Input<br/>Resume + About + JD] --> B[React Frontend]
    B --> C[Express Backend]
    C --> D[Gemini Service]
    C --> E[PDF Parse + PDF Generation]
    D --> F[Structured Interview Report]
    F --> G[MongoDB]
    G --> B
```

## Repository Structure

```text
GeniAI_FullStack_Project/
  Backend/
    server.js
    src/
      app.js
      config/
      controllers/
      middlewares/
      model/
      routes/
      services/
  Frontend/
    src/
      features/
        auth/
        interview/
```

## Quick Start

### 1. Clone and install

```bash
git clone https://github.com/aryankushwaha007/-AI-powered-interview-preparation.git
cd -AI-powered-interview-preparation

cd Backend
npm install

cd ../Frontend
npm install
```

### 2. Configure backend environment

Create `Backend/.env`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_GENAI_API_KEY=your_google_genai_api_key
```

### 3. Run both apps

Terminal 1:

```bash
cd Backend
npm run dev
```

Terminal 2:

```bash
cd Frontend
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## API Overview

### Auth

- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/logout
- GET /api/auth/get-me

### Interview

- POST /api/interview
- POST /api/interview/generate-resume
- GET /api/interview

## Screenshots

Screenshots are listed in ascending filename order from the docs/screenshots folder:

1. Plan creation screen (empty)
![01 - Plan creation screen](docs/screenshots/1.png)

2. Plan creation screen (input filled)
![02 - Plan creation with input](docs/screenshots/2.png)

3. Loading state
![03 - Loading state](docs/screenshots/3.png)

4. Technical questions (collapsed)
![04 - Technical questions overview](docs/screenshots/4.png)

5. Technical questions (expanded)
![05 - Technical questions expanded](docs/screenshots/5.png)

6. Behavioral questions view
![06 - Behavioral questions](docs/screenshots/6.png)

7. Loading screen for next generation cycle
![07 - Loading next cycle](docs/screenshots/7.png)

8. Additional view 8
![08 - Additional view 8](docs/screenshots/8.png)

9. Additional view 9
![09 - Additional view 9](docs/screenshots/9.png)



## Documentation

- Frontend details: [Frontend/README.md](Frontend/README.md)
- Backend docs can be added in: [Backend](Backend)

## Security Note


Already ignored:

- .env
- .env.*
- node_modules
