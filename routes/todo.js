
const express = require('express');
const router = express.Router();

// import Controller
const { create, list, update, remove } = require("../controller/todo");

// @ENDPOINT http://localhost:8000/api/todo
router.get("/todo",list);
router.post("/todo",create);
router.put("/todo/:todoID",update);
router.delete("/todo/:todoID",remove);

module.exports = router;