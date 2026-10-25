import { Body, Controller, Get, Post } from "@nestjs/common";
import { ResearchGroupService } from "./researchgroups.service";
import { CreateResearchGroupDto, UpdateResearchGroupDto } from "./dto/ResearchGroups.dto.";

@Controller("researchgroups")
export class ResearchGroupController {
  constructor(private readonly researchGroupService: ResearchGroupService) { }

  @Get()
  async getResearchGroups() {
    return await this.researchGroupService.getResearchGroups();
  }

  @Post()
  async createResearchGroup(@Body() dto: CreateResearchGroupDto) {
    return await this.researchGroupService.createResearchGroup(dto);
  }
}

