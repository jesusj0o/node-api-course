const express = require("express"); 
const router = express.Router(); 
const {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
  } = require("../controllers/tracks");

const {
    validatorCreateItem,
    validatorGetItem,
  } = require("../validators/tracks");


//TODO http://localhost/tracks GET, POST, DELETE, PUT

router.get('/', getItems); 

router.get("/:id", validatorGetItem,getItem);

router.post('/', validatorCreateItem,createItem); 

module.exports = router; 