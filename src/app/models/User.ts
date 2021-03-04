import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
  JoinColumn,
  BeforeInsert,
} from "typeorm";
import Image from "./Image";
import bcrypt from "bcryptjs";
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

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }
}
