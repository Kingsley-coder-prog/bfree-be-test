const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/bfree-fe-test`));

app.use((req, res, next) => {
  console.log("Hello from the middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2) ROUTES
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your Vue.js app's origin
  optionsSuccessStatus: 200 // Some legacy browsers (IE11) may not understand 204
};

app.use(cors(corsOptions));
app.options("*", cors());
app.use("/api/v1/users", userRouter);

module.exports = app;
