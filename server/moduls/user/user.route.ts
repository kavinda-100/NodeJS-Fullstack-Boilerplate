import express from "express";
import {getUsers} from "./user.controller";

const router = express.Router();

router.get("/all", getUsers)

export default router;