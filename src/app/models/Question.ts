import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import User from "./User";

@Entity("questions")
export default class Question {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  text: string;

  @Column({ default: false })
  is_answered: boolean;

  @ManyToOne((type) => User, (user) => user.questions)
  user: User;
}
