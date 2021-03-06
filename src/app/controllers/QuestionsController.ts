import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Question from "../models/Question";
import User from "../models/User";

export default {
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const questionsRepository = getRepository(Question);

    const question = await questionsRepository.findOne({
      where: { id },
      relations: ["user"],
    });

    return res.json(question);
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
    console.log(receiver.id);

    const newQuestion = new Question();
    newQuestion.text = text;
    newQuestion.user = receiver;

    await questionsRepository.save(newQuestion);

    return res.status(201).json(newQuestion);
  },
};
