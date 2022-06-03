require("dotenv").config();
const express = require("express"); 
const cors = require("cors"); 
const swaggerUI = require("swagger-ui-express");
const dbConnect = require("./config/mongo"); 
const openApiConfig = require("./docs/swagger");

const app = express(); 
app.use(cors()); 
app.use(express.json());

const PORT = process.env.PORT || 3001; 

//TODO documentation routes
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfig));

//TODO getting routes 
app.use("/api", require("./routes"));

app.listen(PORT, () => { 
    console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
})

dbConnect();