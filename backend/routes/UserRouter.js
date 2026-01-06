const express = requise("express");
const router = express.Router();

//controller
const {register} = requise("../controllers/USerController");

//routes
router.post("/register", register);

module.exports = router;