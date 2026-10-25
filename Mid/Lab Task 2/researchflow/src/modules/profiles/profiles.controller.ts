import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProfileService } from "./profiles.service";
import { CreateProfileDto, UpdateProfileDto } from "./dto/profiles.dto";

@Controller("profiles")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) { }

  @Get()
  async getProfiles() {
    return await this.profileService.getProfiles();
  }

  @Post()
  async createProfile(@Body() dto: CreateProfileDto) {
    return await this.profileService.createProfile(dto);
  }
}

