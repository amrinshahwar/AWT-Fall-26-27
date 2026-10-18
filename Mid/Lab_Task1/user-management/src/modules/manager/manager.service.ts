import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Manager } from "./entities/manager.entity";
import { Repository } from "typeorm";
import { CreateManagerDto, UpdateManagerDto } from "./dto/manager.dto";


@Injectable()
export class ManagerService {
  constructor(
    @InjectRepository(Manager) private readonly managerRepository: Repository<Manager>,
  ) { }

  async getManagers() {
    try {
      const managers = await this.managerRepository.find();
      return managers;
    }
    catch (error) {
      throw error;
    }
  }

  async createManager(dto: CreateManagerDto) {
    try {
      const manager = await this.managerRepository.create(dto);
      return await this.managerRepository.save(manager);
    }
    catch (error) {
      throw error;
    }
  }

  async updateManager(id: string, dto: UpdateManagerDto) {
    try {
      console.log("id", id);
      if (!id) {
        throw new NotFoundException("Manager with ID not found");
      }
      const manager = await this.managerRepository.findOne({ where: { id: id } });
      if (!manager) {
        throw new NotFoundException("Manager with ID not found");
      }
      Object.assign(manager, dto);
      const { id: uid, ...rest } = manager;
      return await this.managerRepository.update({ id: id }, rest);
    }
    catch (error) {
      throw error;
    }
  }

  async deleteManager(id: string) {
    try {
      const manager = await this.managerRepository.findOne({ where: { id: id } });
      if (!manager) {
        throw new NotFoundException("Manager with ID not found");
      }
      return await this.managerRepository.delete({ id: id });
    }
    catch (error) {
      throw error;
    }
  }
}