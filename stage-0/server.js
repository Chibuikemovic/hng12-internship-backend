import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
  const response = {
    email: process.env.EMAIL || "akingbadeeniola453@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url:
      process.env.GITHUB_URL ||
      "https://github.com/sonofbossman/hng12-internship-backend",
  };
  res.status(200).json(response);
});

const port = process.env.PORT || 3500;

// start server
const start = function () {
  try {
    app.listen(port, () =>
      console.info(`Server is listening on port ${port}...`)
    );
  } catch (err) {
    console.error("Connection Failed: ", err);
  }
};

start();
