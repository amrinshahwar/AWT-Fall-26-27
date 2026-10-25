import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResearchGroup } from "./entities/researchgroups.entity";
import { ResearchGroupController } from "./researchgroups.controller";
import { ResearchGroupService } from "./researchgroups.service";

@Module({
  imports: [TypeOrmModule.forFeature([ResearchGroup])],
  controllers: [ResearchGroupController],
  providers: [ResearchGroupService],
  exports: [ResearchGroupService],
})
export class ResearchGroupModule { }
