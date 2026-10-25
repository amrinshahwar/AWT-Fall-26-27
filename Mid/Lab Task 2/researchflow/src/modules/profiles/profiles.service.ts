import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Profile } from "./entities/profiles.entity";
import { Repository } from "typeorm";
import { CreateProfileDto, UpdateProfileDto } from "./dto/profiles.dto";


@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,
  ) { }

  async getProfiles() {
    try {
      const profiles = await this.profileRepository.find();
      return profiles;
    }
    catch (error) {
      throw error;
    }
  }
  async createProfile(dto: CreateProfileDto) {
    try {
      const profile = await this.profileRepository.create(dto);
      return await this.profileRepository.save(profile);
    }
    catch (error) {
      throw error;
    }
  }

}
