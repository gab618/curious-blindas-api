import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Question from "../models/Question";
import User from "../models/User";

export default {
  async index(req: Request, res: Response) {
    const questionsRepository = getRepository(Question);

    const questions = await questionsRepository.find();

    return res.json(questions);
  },

  async create(req: Request, res: Response) {
    const { text, username } = req.body;

    if (!text || !username) {
      return res.status(400).json({ error: "Bad request" });
    }

    const usersRepository = getRepository(User);
    const questionsRepository = getRepository(Question);

    const receiver = await usersRepository.findOne({ where: { username } });

    if (!receiver) {
      return res.status(403).json({ error: "User not found" });
    }

    const newQuestion = questionsRepository.create({
      text,
      user_id: receiver.id,
    });

    await questionsRepository.save(newQuestion);

    return res.status(201).json(newQuestion);
  },
};
