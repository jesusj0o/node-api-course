const express = require("express"); 
const router = express.Router(); 
const upoadMiddleware = require("../utils/handleStorage");
const {createItem} = require("../controllers/storage")

router.post('/', upoadMiddleware.single("myfile"), createItem)

module.exports = router; 