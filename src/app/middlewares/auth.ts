import jwt from "jsonwebtoken";
import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { promisify } from "util";

import authConfig from "../../config/auth";

interface ITokenPayload {
  iat: number;
  exp: number;
  id: string;
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not found" });
  }
  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, authConfig.secret);

    const { id } = decoded as ITokenPayload;
    req.userId = Number(id);
  } catch (err) {
    return res.status(401).json({ error: "Invalid token provided" });
  }
  next();
};
