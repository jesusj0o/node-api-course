const express = require("express"); 
const router = express.Router(); 
const authMiddleware = require("../middlewares/session");
const {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
  } = require("../controllers/tracks");

const checkRole = require("../middlewares/role");  

const {
    validatorCreateItem,
    validatorGetItem,
  } = require("../validators/tracks");


//TODO http://localhost/tracks GET, POST, DELETE, PUT
//TODO get all items 
router.get('/', authMiddleware, getItems); 
//TODO get only one item by id
router.get("/:id", authMiddleware, validatorGetItem, getItem);
//TODO create a new item
router.post('/', authMiddleware, checkRole(["admin"]),validatorCreateItem, createItem); 
//TODO update an item by id
router.put(
  "/:id",
  authMiddleware,
  checkRole(["admin"]),
  validatorGetItem,
  validatorCreateItem,
  updateItem
);
//TODO soft delete an item by id
router.delete("/:id", authMiddleware, checkRole(["admin"]),validatorGetItem, deleteItem);

module.exports = router; 