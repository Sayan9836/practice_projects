import { Router } from "express";
import {
  addTodo,
  updateTodo,
  deleteTodo,
  getTodo,
} from "../controller/Todo.controller.js";
const router = Router();

router.route("/add-todo").post(addTodo);
router.route("delete-todo").delete(deleteTodo);
router.route("/update-todo").put(updateTodo);
router.route("/get-todo").get(getTodo);

export default router;
