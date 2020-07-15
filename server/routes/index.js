import express from "express";

import { default as testRouter } from "./api/test";

const router = express.Router();

router.use("/test", testRouter);

export default router;
