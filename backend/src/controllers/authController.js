const users = require("../data/users.json");


const login = (req, res) => {
    const {email, password} = req.body;

    res.json({
        email,
        password
    });
};

module.exports = {
    login
}