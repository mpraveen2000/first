import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Student } from 'src/student/student.model';
import { studentDTO } from 'src/student/dto/student.dto';

@Injectable()
export class StudentPrismaService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<Student>,
    private readonly prisma: PrismaService,
  ) {}

  async createStudentPrisma(data: studentDTO): Promise<Student> {
    const value = await this.prisma.student.create({
      data,
    });
    return value;
  }
  async getAllPrismaStudent(): Promise<Student[]> {
    const students = await this.prisma.student.findMany({ where: { archived: false }});
    return students;
  }
  async updatePrismaStudent(id: string, data: studentDTO): Promise<Student> {
    const updatedStudent = await this.prisma.student.update({
      where: { id: id },
      data,
    });
    return updatedStudent;
  }
  async deletePrismaStudent(id: any): Promise<Student> {
    const deletedStudent = await this.prisma.student.update({
      where: { id },
      data: { archived: true },
    });
    return deletedStudent;
  }
  async getOrConditionStudentPrisma(search: string): Promise<Student[]> {
    try {
      const students = await this.studentModel.find({
        $or: [{ newCompany: search }, { newPosition: search }],
      });
      return students;
    } catch (error) {
      throw new Error(`Error searching students: ${error}`);
    }
  }
  async countArchivedStudents(): Promise<number> {
    const count = await this.studentModel.countDocuments({ archived: true });
    return count;
  }
  async countUnArchivedStudents(): Promise<number> {
    const count = await this.studentModel.countDocuments({ archived: false });
    return count;
  }
  
  
}
