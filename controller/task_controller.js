const task = require("../model/task");

module.exports = class TaskController {
  static createTask(req, res) {
    res.render("../views/tasks/create");
  }

  static showTasks(req, res) {
    res.render("../views/tasks/all");
  }
};
