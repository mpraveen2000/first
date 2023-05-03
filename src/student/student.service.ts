import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { student } from './interface/studentinterface';
import { studentDTO } from './dto/student.dto';
@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private studentModel: Model<student>) {}

  async getstudents(): Promise<student[]> {
    return await this.studentModel.find({ archived: false }).exec();
  }

  async getOnestudent(id: string): Promise<student> {
    return await this.studentModel.findById({ _id: new Types.ObjectId(id) });
  }

  async updateOnestudent(id: string, data: studentDTO): Promise<student> {
    return await this.studentModel.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      { ...data },
      {
        new: true,
      },
    );
  }

  async createStudent(data: studentDTO): Promise<student> {
    const student = await this.studentModel.create({
      ...data,
      archived: false,
    });
    return student;
  }
  async deleteStudent(id: any): Promise<student> {
    return await this.studentModel.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      { archived: true },
    );
  }
  
}
