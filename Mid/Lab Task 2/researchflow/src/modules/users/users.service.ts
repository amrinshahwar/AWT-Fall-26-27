import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/users.entity";
import { Repository } from "typeorm";
import { CreateUserDto, UpdateUserDto } from "./dto/users.dto";


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async getUsers() {
    try {
      const users = await this.userRepository.find();
      return users;
    }
    catch (error) {
      throw error;
    }
  }
  async createUser(dto: CreateUserDto) {
    try {
      const user = await this.userRepository.create(dto);
      return await this.userRepository.save(user);
    }
    catch (error) {
      throw error;
    }
  }

}
