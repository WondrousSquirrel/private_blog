import express from "express";

import { 
  userList,
  updateUser,
  deleteUser,
  createUser,
  createAdmin,
  getUserById
  } from "../../controllers/userController";
import { is_authenticated, is_admin } from "../../middleware/auth";

const router = express.Router();

router.get("/createadmin", createAdmin);
router.post("/", createUser);
router.get("/", is_authenticated, userList);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
