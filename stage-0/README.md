# Stage 0 - Public API

## Task

Develop a public API that returns:

- Your registered email.
- The current UTC datetime (ISO 8601 format).
- The GitHub URL of this repository.

## Tech Stack

- Node.js + Express

## How to Run Locally

```bash
git clone https://github.com/sonofbossman/hng12-internship-backend.git
cd HNG12-Backend-Tasks/stage-0
npm install
cp .env.example .env  # Configure your email
node src/server.js
```

## API Endpoint

```http
GET https://your-deployed-url.com/
```

## Response Example

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/hng12-internship-backend"
}
```
