import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Admin } from "./entities/admin.entity";
import { Repository } from "typeorm";
import { CreateAdminDto, UpdateAdminDto } from "./dto/admin.dto";


@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>,
  ) { }

  async getAdmins() {
    try {
      const admins = await this.adminRepository.find();
      return admins;
    }
    catch (error) {
      throw error;
    }
  }

  async createAdmin(dto: CreateAdminDto) {
    try {
      const admin = await this.adminRepository.create(dto);
      return await this.adminRepository.save(admin);
    }
    catch (error) {
      throw error;
    }
  }

  async updateAdmin(id: string, dto: UpdateAdminDto) {
    try {
      console.log("id", id);
      if (!id) {
        throw new NotFoundException("Admin with ID not found");
      }
      const admin = await this.adminRepository.findOne({ where: { id: id } });
      if (!admin) {
        throw new NotFoundException("Admin with ID not found");
      }
      Object.assign(admin, dto);
      const { id: uid, ...rest } = admin;
      return await this.adminRepository.update({ id: id }, rest);
    }
    catch (error) {
      throw error;
    }
  }

  async deleteAdmin(id: string) {
    try {
      const admin = await this.adminRepository.findOne({ where: { id: id } });
      if (!admin) {
        throw new NotFoundException("Admin with ID not found");
      }
      return await this.adminRepository.delete({ id: id });
    }
    catch (error) {
      throw error;
    }
  }
}