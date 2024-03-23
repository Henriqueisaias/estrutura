const TaskController = require("../controller/task_controller");
const express = require("express");

const router = express.Router();


router.get('/add', TaskController.createTask)
router.get('/', TaskController.showTasks)

module.exports = router