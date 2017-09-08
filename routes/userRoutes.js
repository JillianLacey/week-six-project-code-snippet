const express = require("express");
const User = require("../models/User");
userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
    res.render("index", { users: req.session.user });//should this be a redirect instead of render?
});


// userRoutes.get("/update", (req, res) => {
//     res.render("update", { users: req.session.user });
// });



module.exports = userRoutes;