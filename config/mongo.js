const monggose = require("mongoose"); 

const dbConnect = () => { 
    const DB_URI = process.env.DB_URI; 
    monggose.connect(DB_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, (err, res) => { 
        if (err) {
            console.log("*** ERROR_CANNOT_CONNECT_TO_DATABASE ***");
        }
    })
}


module.exports = dbConnect; 