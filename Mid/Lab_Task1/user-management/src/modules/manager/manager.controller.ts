import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { ManagerService } from "./manager.service";
import { CreateManagerDto, UpdateManagerDto } from "./dto/manager.dto";

@Controller("managers")
export class ManagerController {
  constructor(private readonly managerService: ManagerService) { }

  @Get()
  async getManagers() {
    return await this.managerService.getManagers();
  }


  @Post()
  async createManager(@Body() dto: CreateManagerDto) {
    return await this.managerService.createManager(dto);
  }

  @Patch(":id")
  async updateManager(@Param("id") id: string, @Body() dto: UpdateManagerDto) {
    return await this.managerService.updateManager(id, dto);
  }

  @Delete(":id")
  async deleteManager(@Param("id") id: string) {
    return await this.managerService.deleteManager(id);
  }
}

