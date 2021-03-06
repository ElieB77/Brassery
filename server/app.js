const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");
const logger = require("morgan");
const colors = require("colors");
const errorHandler = require("./middlewares/error");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env variables
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Route files
const authentification = require("./routes/authentification");
const users = require("./routes/users");
const recipes = require("./routes/recipes");
const materials = require("./routes/materials");
const batches = require("./routes/batches");
const conversations = require("./routes/conversations");
const messages = require("./routes/messages");
const hops = require("./routes/hops");
const fermentables = require("./routes/fermentables");
const cultures = require("./routes/cultures");

const app = express();

// file upload
app.use(fileUpload());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 500,
});
app.use(limiter);

// // Prevent http param pollution
// app.use(hpp())

// Enable CORS
app.use(cors());

// Mount routers
app.use("/api/auth", authentification);
app.use("/api/users", users);
app.use("/api/recipes", recipes);
app.use("/api/materials", materials);
app.use("/api/batches", batches);
app.use("/api/conversations", conversations);
app.use("/api/messages", messages);
app.use("/api/hops", hops);
app.use("/api/fermentables", fermentables);
app.use("/api/cultures", cultures);

app.use(errorHandler);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
