const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const logger = require("morgan");
const sessionConfig = require("./sessionConfig");
const checkAuth = require("./middlewares/checkAuth");
const indexRoutes = require("./routes/indexRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const User = require("./models/User");
const Snippet = require("./models/Snippet");

const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bcrypt = require("bcryptjs");

const app = express();

const dbUrl = "mongodb://localhost:27017/codeSnippetOrganizer";
mongoose.Promise = bluebird;
let db = mongoose.connect(dbUrl);
const port = process.env.PORT || 8060;



// VIEW ENGINE
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");


// MIDDLEWARE
app.use(express.static(path.join(__dirname, "./public")));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(sessionConfig));


//ROUTES
// app.use("/", checkAuth, indexRoutes);    //I think this is where we put checkauth
app.use("/", indexRoutes);
app.use("/auth", authRoutes);
// app.use("/user", checkAuth, userRoutes);
app.use("/user", checkAuth, userRoutes);
app.use("/login", authRoutes);
app.use("/signup", authRoutes);



// PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});
