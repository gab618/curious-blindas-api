import e from "express";
import express from "express";
import routes from "./routes";
import { resolve } from "path";
import "./database/connection";

class App {
  server = express();

  constructor() {
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      "/files",
      express.static(resolve(__dirname, "..", "uploads"))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
