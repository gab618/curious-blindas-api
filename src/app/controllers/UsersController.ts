import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";

export default {
  async index(req: Request, res: Response) {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find();

    return res.json(users);
  },

  async show(req: Request, res: Response) {
    const { username } = req.params;

    const usersRepository = getRepository(User);

    const users = await usersRepository.findOne({ where: { username } });

    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const { name, username, email, bio, password } = req.body;

    const usersRepository = getRepository(User);
    const newUser = usersRepository.create({
      name,
      username,
      email,
      password,
      bio,
    });

    await usersRepository.save(newUser);

    return res.status(201).json(newUser);
  },
};
