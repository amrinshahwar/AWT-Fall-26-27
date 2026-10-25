import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "research_groups" })
export class ResearchGroup {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  leader_id!: string;
}