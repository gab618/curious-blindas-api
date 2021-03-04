import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Image from "./Image";
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

  @OneToMany(() => Image, (image) => image.user, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "user_id" })
  images: Image[];
}
