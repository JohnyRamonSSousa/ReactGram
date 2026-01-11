require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;
const app = express();


// Config JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const router = require("./routes/Router");

// Salve Cors
app.use(cors({credentials: true, origin: "http://localhost:3000"}));

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploadas")));


// DB connection
require("./config/db")


app.use(router);

app.listen(port, () =>{
    console.log(`App rodando na porta ${port}`);
});