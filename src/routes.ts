import { Router, Request, Response } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import UsersController from "./app/controllers/UsersController";
import SessionController from "./app/controllers/SessionController";

import authMiddleware from "./app/middlewares/auth";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/", (req: Request, res: Response) => {
  return res.json({ ok: "?XD" });
});

routes.get("/users", UsersController.index);
routes.get("/users/:username", UsersController.show);
routes.post("/users", upload.array("images"), UsersController.create);
routes.post("/sessions", SessionController.create);

routes.use(authMiddleware);
routes.get("/test", (req: Request, res: Response) => {
  return res.json({ ok: "?XD" });
});

export default routes;
