import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import Answer from "./Answer";
import User from "./User";

@Entity("questions")
export default class Question {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  text: string;

  @Column({ default: false })
  is_answered: boolean;

  @Column({ default: new Date() })
  created_at: Date;

  @ManyToOne((type) => User, (user) => user.questions)
  user: User;

  @OneToMany((type) => Answer, (answer) => answer.question)
  answers: Answer[];
}
