import e from "express";
import express from "express";
import routes from "./routes";
import "./database/connection";

class App {
  server = express();

  constructor() {
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
