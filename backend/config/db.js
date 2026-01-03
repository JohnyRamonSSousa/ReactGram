const mongoose = require("mongoose");
const dbUser = ''
const dbPassword = ''


const Conn = async () => {
     try{    
            const dbConn = await mongoose.connect(`mongodb+srv://johnyramonvoss_db_user:<db_password>@cluster0.cchuj7t.mongodb.net/?appName=Cluster0`);
    
        console.log("Conectado");

        return dbConn;
    } catch (error) {
        console.log(error);
    }
        
};



//Connection
