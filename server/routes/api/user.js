import express from "express";

import { 
  userList,
  updateUser,
  deleteUser,
  createUser,
  createAdmin,
  getUserById,
  login
  } from "../../controllers/userController";
import { isAuthenticated, isAdmin } from "../../middleware/auth";

const router = express.Router();

router.post("/login", login);
router.post("/", createUser);
router.get("/createadmin", createAdmin);
router.get("/", isAuthenticated, userList);
router.get('/:id', isAuthenticated, getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
