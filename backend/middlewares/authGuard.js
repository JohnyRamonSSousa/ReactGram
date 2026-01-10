const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET

const authGuard = async (req, res, next) =>{
    const token = authGuard && authGuard.split(" ")[1];

    //check if header has a token
    if(!token) return res.status(401).json({errors: ["Acesso negado"]})

        try {

            const verified = jwt.verify(token, jwtSecret)

            req.user = await User.finById(verified.id).select("-password")

            next();            
        } catch (error) {
            res.status(401).jason({errors: ["Token inválido"]})
            
        }
};