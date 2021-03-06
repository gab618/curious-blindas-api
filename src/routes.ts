import { Router, Request, Response } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import UsersController from "./app/controllers/UsersController";
import SessionController from "./app/controllers/SessionController";

import authMiddleware from "./app/middlewares/auth";
import QuestionsController from "./app/controllers/QuestionsController";
import AnswersController from "./app/controllers/AnswersController";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/", (req: Request, res: Response) => {
  return res.json({ ok: "?XD" });
});

routes.get("/users", UsersController.index);
routes.get("/users/:username", UsersController.show);
routes.post("/users", upload.array("images"), UsersController.create);
routes.post("/sessions", SessionController.create);

routes.get("/questions/:id", QuestionsController.show);
routes.post("/questions", QuestionsController.create);

routes.use(authMiddleware);

routes.post("/answer/:question_id", AnswersController.create);

export default routes;
