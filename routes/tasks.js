import express from "express";
import Task from "../models/Task.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// All routes below require auth
router.use(auth);

router.get("/", async (req, res) => {
  const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 });
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const { title } = req.body;
  const task = await Task.create({ title, user: req.user.id });
  res.status(201).json(task);
});

router.delete("/:id", async (req, res) => {
  const t = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
  if (!t) return res.status(404).json({ message: "Task not found" });
  res.json({ message: "Deleted" });
});

export default router;
