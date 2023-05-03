import { Controller, Get, Post, Put } from '@nestjs/common';
import { Body, Delete, Param } from '@nestjs/common/decorators';
import { studentDTO } from './dto/student.dto';
import { student } from './interface/studentinterface';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentservice: StudentService) {}

  @Get('/getAllStudents')
  async getAllstudent(): Promise<student[]> {
    return this.studentservice.getstudents();
  }

  @Get('/getStudentById/:id')
  async getOnestudent(@Param('id') id: string): Promise<student> {
    console.log(id);
    return await this.studentservice.getOnestudent(id);
  }

  @Post('/updateStudent/:id')
  async updateOnestudent(
    @Param('id') id: string,
    @Body('body') data: studentDTO,
  ): Promise<student> {
    return await this.studentservice.updateOnestudent(id, data);
  }

  @Delete('/deleteStudent/:id')
  async deleteStudent(@Param('id') id: string): Promise<student> {
    return await this.studentservice.deleteStudent(id);
  }
  @Post('/createStudent')
  async createStudent(@Body('data') data: studentDTO): Promise<student> {
    console.log(data?.StudentAddress, data?.StudentDistrict);
    return await this.studentservice.createStudent(data);
  }
}
