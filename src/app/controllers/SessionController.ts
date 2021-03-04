import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";
import jwt from "jsonwebtoken";

import authConfig from "../../config/auth";

export default {
  async create(req: Request, res: Response) {
    const { username, password } = req.body;

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    if (!(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Password does not match" });
    }

    const { id } = user;

    return res.json({
      user: {
        id,
        username,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  },
};
