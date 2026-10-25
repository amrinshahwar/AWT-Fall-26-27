import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResearchGroup } from "./entities/ResearchGroups.entity";
import { ResearchGroupController } from "./ResearchGroups.controller";
import { ResearchGroupService } from "./ResearchGroups.service";

@Module({
  imports: [TypeOrmModule.forFeature([ResearchGroup])],
  controllers: [ResearchGroupController],
  providers: [ResearchGroupService],
  exports: [ResearchGroupService],
})
export class ResearchGroupModule { }
