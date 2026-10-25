import { IsNotEmpty } from "class-validator";

export class CreateProfileDto {
  @IsNotEmpty()
  bio!: string;

  @IsNotEmpty()
  interest_tags!: string;

  @IsNotEmpty()
  skills!: string;

  @IsNotEmpty()
  work_links!: string;

  @IsNotEmpty()
  availability!: string;

  @IsNotEmpty()
  capacity!: number;

}

export class UpdateProfileDto {
  @IsNotEmpty()
  bio?: string;

  @IsNotEmpty()
  interest_tags?: string;

  @IsNotEmpty()
  skills?: string;

  @IsNotEmpty()
  work_links?: string;

  @IsNotEmpty()
  availability?: string;

  @IsNotEmpty()
  capacity?: number;
}
