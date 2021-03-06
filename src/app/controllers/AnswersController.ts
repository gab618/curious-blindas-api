import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Question from "../models/Question";
import Answer from "../models/Answer";

export default {
  async create(req: Request, res: Response) {
    const { text } = req.body;
    const { question_id } = req.params;

    if (!text || !question_id) {
      return res.status(400).json({ error: "Bad request" });
    }

    const userId = req.userId;

    const questionsRepository = getRepository(Question);
    const answersRepository = getRepository(Answer);

    const question = await questionsRepository.findOne({
      where: { id: question_id },
      relations: ["user"],
    });

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    console.log(question);

    if (question.user.id !== userId || question.is_answered) {
      return res
        .status(401)
        .json({ error: "You can not answer this question" });
    }

    const newAnswer = new Answer();
    newAnswer.text = text;
    newAnswer.question = question;

    question.is_answered = true;

    await answersRepository.save(newAnswer);
    await questionsRepository.save(question);

    return res.status(201).json(newAnswer);
  },
};
