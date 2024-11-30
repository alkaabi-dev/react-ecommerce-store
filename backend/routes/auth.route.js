import express from "express";
// Alltid när jag importerar något från lokal file så måste jag lägga till .js i importen
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
