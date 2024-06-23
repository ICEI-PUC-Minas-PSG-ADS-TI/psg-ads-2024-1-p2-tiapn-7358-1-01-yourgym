import express from 'express'
import { getUsers, CreateUser, getUser } from "../controllers/UsersController.js"
const router = express.Router();

router.get("/", getUsers);
router.get("/getuser", getUser);
router.post("/user", CreateUser);


export default router;