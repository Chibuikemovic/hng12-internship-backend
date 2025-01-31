import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

// Enable CORS
app.use(cors());

const port = process.env.PORT || 3500;

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
