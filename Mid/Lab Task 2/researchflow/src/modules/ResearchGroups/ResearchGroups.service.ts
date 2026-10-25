import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ResearchGroup } from "./entities/ResearchGroups.entity";
import { Repository } from "typeorm";
import { CreateResearchGroupDto, UpdateResearchGroupDto } from "./dto/ResearchGroups.dto";


@Injectable()
export class ResearchGroupService {
  constructor(
    @InjectRepository(ResearchGroup) private readonly researchGroupRepository: Repository<ResearchGroup>,
  ) { }

  async getResearchGroups() {
    try {
      const researchGroups = await this.researchGroupRepository.find();
      return researchGroups;
    }
    catch (error) {
      throw error;
    }
  }
  async createResearchGroup(dto: CreateResearchGroupDto) {
    try {
      const researchGroup = await this.researchGroupRepository.create(dto);
      return await this.researchGroupRepository.save(researchGroup);
    }
    catch (error) {
      throw error;
    }
  }

}
