const express = require("express"); 
const router =  express.Router(); 
const {registerCtrl, loginCtrl } = require("../controllers/auth")
const { validatorRegister, validatorLogin} = require("../validators/auth")

/** 
 * http:localhost:3001/api/auth/register
 *
 * Route register new user 
 * @openapi
 * /auth/register: 
 *      post: 
 *          tags:
 *              - auth 
 *          summary: "Register a new user"
 *          description: "this route is used to sign up a new user"
 *          requestBody: 
 *              content:
 *                  application/json: 
 *                      schema:
 *                          $ref: "#/components/schemas/authRegister"
 *          responses: 
 *              '200': 
 *                  description: "User has been registered successfully"
 *              '401': 
 *                  description: "Error by user validation"
 * */

//TODO http:localhost:3001/api/auth/register
router.post("/register", validatorRegister, registerCtrl);


/** 
 * http:localhost:3001/api/auth/login
 *
 * Route register new user 
 * @openapi
 * /auth/login: 
 *      post: 
 *          tags:
 *              - auth 
 *          summary: "Sign in with an existent user"
 *          description: "this route is used to sign in with your user credentials"
 *          requestBody: 
 *              content:
 *                  application/json: 
 *                      schema:
 *                          $ref: "#/components/schemas/authLogin"
 *          responses: 
 *              '200': 
 *                  description: "User has been logged in successfully"
 *              '401': 
 *                  description: "Error by user credentials"
 * */

//TODOhttp:localhost:3001/api/auth/login
router.post("/login", validatorLogin, loginCtrl);

module.exports = router; 