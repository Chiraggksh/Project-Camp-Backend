import express from "express";
import cors from "cors";

const app = express();

//some basic middleware configurations setup:
app.use(express.json({ limit: "16kb" })); // Converts incoming JSON data → JavaScript object so u can access it using req.body vrna it will return as undefined
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //use to accept data from url itself like form data ya url encoded data and extended true helps to send objects in objects nested objects used in form like { user: { name: 'Chirag', age: 21 } }
app.use(express.static("public"));  //helps to serve static files in this

//cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || ["http://localhost:5173"], //means in in frontend se allowed hoga
    credentials: true, //allows cookies and authentication headers that are needed in login, sessions and jwt in cookies
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], //defined http methods ki sirf yahi yahi use hoskte h
    allowedHeaders: ["Authorization", "Content-Type"], //authorization are used for jwt tokens and content type are used like json
  }),
);

//import healthCheck Router
import healthCheckRouter from "./routes/healthcheck.routes.js";
app.use("/api/v1/healthcheck", healthCheckRouter);


import authRouter from "./routes/auth.routes.js";
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send("YELOWWW");
});

app.get("/instagram", (req, res) => {
  res.send("INstagram page activated");
});

export default app;
