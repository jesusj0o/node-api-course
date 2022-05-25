require("dotenv").config();
const express = require("express"); 
const cors = require("cors"); 
const dbConnect = require("./config/mongo"); 

const app = express(); 

const PORT = process.env.PORT || 3001; 

app.listen(PORT, () => { 
    console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
})

dbConnect();