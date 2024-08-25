import { Router } from "express";
import {
  registerUser,
  loginUser,
  products,
} from "../controller/user.controller.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/products").get(products);
export default router;
