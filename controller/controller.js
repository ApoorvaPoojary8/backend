const tasks = require("../model/model"); // assuming same model, change if needed

const allTasks = async (req, res) => {
  try {
    const task = await tasks.find({});
    if (!task) {
      return res.status(404).json({ message: "No task found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

const singleTask = async (req,res) => {
  try {
    const { id } = req.params;
    const task = await tasks.findOne({ _id:id }).select("-_v");
    if (!task) {
      return res.status(404).json({ message: "No task found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await tasks.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await tasks.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!task) {
      return res.status(400).json({ message: "No task found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await tasks.findOneAndDelete({ _id: id });
    if (!task) {
      return res.status(404).json({ message: "No task found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  allTasks,
  singleTask,
  createTask,
  updateTask,
  deleteTask,
};
