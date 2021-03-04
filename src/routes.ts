import { Router, Request, Response } from "express";
import UsersController from "./app/controllers/UsersController";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.json({ ok: "?XD" });
});

routes.post("/users", UsersController.create);
routes.get("/users", UsersController.index);
routes.get("/users/:username", UsersController.show);

export default routes;
