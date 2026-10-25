import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  password_hash!: string;

  @IsNotEmpty()
  role!: string;
}

export class UpdateUserDto {
  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  email?: string;

  @IsNotEmpty()
  password_hash?: string;

  @IsNotEmpty()
  role?: string;
}

