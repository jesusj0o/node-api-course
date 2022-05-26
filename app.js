require("dotenv").config();
const express = require("express"); 
const cors = require("cors"); 
const dbConnect = require("./config/mongo"); 


const app = express(); 
app.use(cors()); 
app.use(express.json());

const PORT = process.env.PORT || 3001; 

//TODO getting routes 
app.use("/api", require("./routes"));

app.listen(PORT, () => { 
    console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
})

dbConnect();