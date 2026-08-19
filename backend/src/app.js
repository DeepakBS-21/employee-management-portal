const express = require("express");

const app = express();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");

app.use(authRoutes);

app.get("/", (req,res) => {
    res.json({
        message: "Hello Employee Management Portal!"
    });
});

app.get("/about", (req, res) => {
    res.json({
        message: "This is the Employee Management Portal Backend"
    });
});

module.exports = app;

