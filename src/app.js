import express from "express";
import cors from "cors";

const app = express();

//some basic middleware configurations setup:
app.use(express.json({ limit: "16kb" })); // this helps to take json data and parse it as req: direct req.body me content ajaega vrna it will return as undefined
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //use to accept data from url itself and this helps to send objects in objects nested objects used in form like { user: { name: 'Chirag', age: 21 } }
app.use(express.static("public"));

//cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

//import healthCheck Router
import healthCheckRouter from "./routes/healthcheck.routes.js";
app.use("/api/v1/healthcheck", healthCheckRouter);

app.get("/", (req, res) => {
  res.send("YELOWWW");
});

app.get("/instagram", (req, res) => {
  res.send("INstagram page activated");
});

export default app;
