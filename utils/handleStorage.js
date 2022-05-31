const multer = require("multer"); 

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`; 
        cb(null, pathStorage); 
    },
    filename: function(res, file, cb){ 
        const ext = file.originalname.split(".").pop(); 
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename); 
    }
});

const upoadMiddleware = multer({storage}); 

module.exports = upoadMiddleware; 