import express from "express";

import { 
  userList,
  updateUser,
  deleteUser,
  createUser,
  createAdmin,
  getUserById
  } from "../../controllers/userController";
import { isAuthenticated, isAdmin } from "../../middleware/auth";

const router = express.Router();

router.get("/createadmin", isAdmin, createAdmin);
router.post("/", createUser);
router.get("/", isAuthenticated, userList);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
