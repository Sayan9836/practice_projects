import { Router } from "express";
import { Authorization } from "../middlewares/auth.middleware.js";
import { Login, Register } from "../controllers/user.controllers.js";

const router = Router();

router.route("/register").post(Register);
router.route("/login").post(Login);

export default router;
