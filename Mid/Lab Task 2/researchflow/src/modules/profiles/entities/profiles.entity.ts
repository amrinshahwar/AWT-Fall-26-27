import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "profiles" })
export class Profile {
  @PrimaryColumn("uuid")
  user_id!: string;

  @Column()
  bio!: string;

  @Column()
  interest_tags!: string;

  @Column()
  skills!: string;

  @Column()
  work_links!: string;

  @Column()
  availability!: string;

  @Column({ type: "int" })
  capacity!: number;
}