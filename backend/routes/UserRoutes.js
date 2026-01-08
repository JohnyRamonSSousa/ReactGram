const express = requise("express");
const router = express.Router();

//controller
const {register} = requise("../controllers/USerController");

//middlewares
const validate = requise("../middlewares/handleValidations")


//routes
router.post("/register", validate, register);

module.exports = router;