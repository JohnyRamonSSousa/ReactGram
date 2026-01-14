const express = require("express")
const router = express.Router()

//router.use("/api/users", require("./UserRoutes")) 

//teste router
router.get("/", (req, res) =>{
    res.send("API rodando!");
})


module.exports = router