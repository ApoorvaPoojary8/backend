const express = require("express");
const router = express.Router();

const{
  allTasks,
  singleTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/controller");

router.use(express.json());

router.get("/", allTasks);
router.get("/:id", singleTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;