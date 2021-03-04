import { Router, Request, Response } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import UsersController from "./app/controllers/UsersController";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/", (req: Request, res: Response) => {
  return res.json({ ok: "?XD" });
});

routes.get("/users", UsersController.index);
routes.get("/users/:username", UsersController.show);
routes.post("/users", upload.array("images"), UsersController.create);

export default routes;
