import express from "express";

import { createUser, userList } from "../../controllers/userController";

const router = express.Router();

router.post("/", createUser);
router.get("/", userList);

export default router;
