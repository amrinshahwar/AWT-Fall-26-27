import { IsNotEmpty } from "class-validator";

export class CreateResearchGroupDto {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  leader_id!: string;
}

export class UpdateResearchGroupDto {
  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  leader_id?: string;
}

