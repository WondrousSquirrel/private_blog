import express from "express";

import { default as testRouter } from "./api/test";
import { default as userRouter } from "./api/user";

const router = express.Router();

router.use("/test", testRouter);
router.use("/user", userRouter);

export default router;
