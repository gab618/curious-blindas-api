import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { promisify } from "util";

import authConfig from "../../config/auth";

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not found" });
  }
  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;
  } catch (err) {
    return res.status(401).json({ error: "Invalid token provided" });
  }
  next();
};
