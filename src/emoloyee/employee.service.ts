import { Injectable } from '@nestjs/common';
import { Employee } from './employee.model';
import { EmployeeDetailDto } from './employee.dto';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {
  getEmployeeAndUpdate(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel('Employee') private employeeModel: Model<Employee>,
    private prisma: PrismaService,
  ) {}
  async createEmployeeContact(
    createEmployeeContact: EmployeeDetailDto,
  ): Promise<Employee> {
    const Employee = await this.employeeModel.create({
      archived: false,
      ...createEmployeeContact,
    });
    return Employee;
  }

  async deleteEmployeeContact(id: string): Promise<Employee> {
    const data = await this.employeeModel.findById({
      _id: new Types.ObjectId(id),
    });

    let deletedEmployee;
    if (data) {
      deletedEmployee = await this.employeeModel.updateOne(
        {
          _id: id,
        },
        { archived: true },
      );
    }
    return deletedEmployee;
  }

  async getAllEmployees(): Promise<Employee[]> {
    const employees = await this.employeeModel.find({ archived: false });
    return employees;
  }

  async getEmployeesByPhones(mobiles: string[]): Promise<Employee[]> {
    const customers = await this.employeeModel.find({
      mobile: { $in: mobiles },
    });
    return customers;
  }
  async updateOneEmployee(
    id: string,
    data: EmployeeDetailDto,
  ): Promise<Employee> {
    const updatedEmployee = await this.employeeModel.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      { ...data },
      { new: true },
    );
    return updatedEmployee;
  }
  async countArchivedEmployees(): Promise<number> {
    const count = await this.employeeModel.countDocuments({ archived: true });
    return count;
  }
  async countUnArchivedEmployees(): Promise<number> {
    const count = await this.employeeModel.countDocuments({ archived: false });
    return count;
  }
  async getOrCondition(search: string): Promise<Employee[]> {
    const employees = await this.employeeModel.find({
      $or: [{ newcompany: search }, { newPosition: search }],
    });
    return employees;
  }
  async getAndCondition(search: string): Promise<Employee[]> {
    console.log(search);
    const employees = await this.employeeModel.find({
      $and: [{ newcompany: search }, { newPosition: search }],
    });
    return employees;
  }
}
