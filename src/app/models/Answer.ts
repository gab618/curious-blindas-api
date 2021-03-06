import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Question from "./Question";

@Entity("answers")
export default class Answer {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  text: string;

  @Column({ default: new Date() })
  created_at: Date;

  @ManyToOne((type) => Question, (question) => question.answers)
  question: Question;
}
