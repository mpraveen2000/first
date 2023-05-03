import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Employee } from '../employee.model';
import { EmployeeDetailDto } from '../employee.dto';

@Injectable()
export class EmployeePrismaService {

  
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
    private readonly prisma: PrismaService,
  ) {}

  async createEmployeePrisma(data: EmployeeDetailDto): Promise<Employee> {
    return await this.prisma.employee.create({
      data
    });
  }
  async getAllPrismaEmployees(): Promise<Employee[]> {
    const employees = await this.prisma.employee.findMany();
    return employees;
  }
  async updatePrismaEmployee(
    id: string,
    data: EmployeeDetailDto,
  ): Promise<Employee> {
    const updatedEmployee = await this.prisma.employee.update({
      where: { id: (id) },
      data,
    });
    return updatedEmployee;
  }
  async deletePrismaEmployee(id: any): Promise<Employee> {
    const deletedEmployee = await this.prisma.employee.delete({
      where: { id },
    });                                            
    return deletedEmployee;
  }
  async getOrConditionPrisma(search: string): Promise<Employee[]> {
    try {
      const employees = await this.employeeModel.find({
        $or: [{ newCompany: search }, { newPosition: search }],
      });
      return employees;
    } catch (error) {
      throw new Error(`Error searching employees: ${error}`);
    }
  }
  
}

