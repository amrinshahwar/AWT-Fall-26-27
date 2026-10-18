import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateCustomerDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  email: string = "";

  @IsNotEmpty()
  password: string = "";

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}

export class UpdateCustomerDto {
  @IsOptional()
  name: string = "";

  @IsOptional()
  email: string = "";

  @IsOptional()
  password: string = "";

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}

