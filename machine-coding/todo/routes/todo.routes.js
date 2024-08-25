import { Router } from "express";
import {
  addTODO,
  deleteTodo,
  getTodo,
  getTodoById,
  loginUser,
  registerUser,
  searchTodo,
  sendMailToUser,
  updateTodo,
} from "../controllers/TodoController.js";
import { upload } from "../middlewares/upload.js";
import {
  BuyCourses,
  addCourse,
  addStudent,
  getAllCourses,
  getAllStudents,
} from "../controllers/StudentController.js";
import { Authorize } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/get-todos").get(getTodo);
router.route("/add-todo").post(Authorize, addTODO);
router.route("/delete-todo/:id").delete(deleteTodo);
router.route("/update-todo/:id").patch(updateTodo);
router.route("/get-todo/:id").get(getTodoById);
router.route("/search-todos/:key").get(searchTodo);

router.route("/upload/single").post(upload.single("file"), (req, res) => {
  console.log(req.file);
  return res.send("Single file");
});

router.route("/upload/multiple").post(upload.array("file", 10), (req, res) => {
  console.log(req.files);
  return res.send("multiple files");
});

router.route("/add-user").post(registerUser);
router.route("/login").post(loginUser);
router.route("/send-mail").post(sendMailToUser);

router.route("/add-student").post(addStudent);
router.route("/add-course").post(addCourse);
router.route("/buy-courses").post(BuyCourses);
router.route("/getall-courses").get(getAllCourses);
router.route("/getall-students").get(getAllStudents);

export default router;
