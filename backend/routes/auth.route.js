import express from "express";
// Alltid när jag importerar något från lokal file så måste jag lägga till .js i importen
import { logIn, logOut, signUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup", signUp);

router.get("/login", logIn);

router.get("/logout", logOut);

export default router;
