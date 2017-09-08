const express = require("express");
const indexRoutes = express.Router();
const User = require("../models/User");
// const Snippet = require("../models/Snippet");



//if user is not logged in redirect to the login page



// indexRoutes.get("/index", (req, res) => {
//     res.render("index", { users: req.session.user });
// });



indexRoutes.get("/", (req, res) => {
    res.render("index")
});

module.exports = indexRoutes;   