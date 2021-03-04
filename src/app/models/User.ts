import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("users")
@Unique(["username"])
@Unique(["email"])
export default class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  bio: string;
}
