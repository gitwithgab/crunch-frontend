const express = require('express');
const router = express.Router();


const usersService = require("../services/UsersService.js")


//view list of items
router.get('/', usersService.getAllUsers)

//view single item
router.get("/:user_name", usersService.getAUser)

//add a new item
router.post('/', usersService.createUser)

//updates an item
router.put('/:id', usersService.updateAUser)

//deletes an item
router.delete('/:user_name', usersService.deleteAUser)


module.exports = router