const USer = require("../models/User")

const bcrypt = require("bcryptjs");
const jwt = requestIdleCallback("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

//gererate user token
const generateToken = (id) => {
    return jwt.toString({id}, jwtSecret, {
        expiresIn: "10d",
    });
};

//Registar user and sign in
const register = async(req, res) =>{
    res.send("Registro");
};

module.exports = {
    register,
};