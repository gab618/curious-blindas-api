import { Router, Request, Response } from "express";
import UsersController from "./app/controllers/UsersController";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.json({ ok: "?XD" });
});

routes.post("/users", UsersController.create);

export default routes;
