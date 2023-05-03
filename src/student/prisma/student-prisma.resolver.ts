import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Student } from 'src/student/student.model';
import { StudentPrismaService } from './student-prisma.service';
import { studentDTO } from 'src/student/dto/student.dto';

@Resolver(() => Student)
export class StudentPrismaResolver {
 
  constructor(private readonly studentPrismaService: StudentPrismaService) {}

  @Mutation(() => Student)
  async createStudentPrisma(
    @Args('createStudent') createStudent: studentDTO,
  ): Promise<Student> {
    console.log(createStudent, 'wiefb');
    return await this.studentPrismaService.createStudentPrisma(createStudent);
  }
  @Query(() => [Student])
  async getAllPrismaStudent(): Promise<Student[]> {
    const Student = await this.studentPrismaService.getAllPrismaStudent();
    return Student;
  }
  @Mutation(() => Student)
  async updatePrismaStudent(
    @Args('id') id: string,
    @Args('updateData') updateData: studentDTO,
  ): Promise<Student> {
    const updatedStudent = await this.studentPrismaService.updatePrismaStudent(id, updateData);
    return updatedStudent;
  }
  @Mutation(() => Student)
async deletePrismaStudent(
  @Args('id') id: string,
): Promise<Student> {
  return await this.studentPrismaService.deletePrismaStudent(id);
}
@Query(() => Number)
async countArchivedStudents(): Promise<number> {
  const count = await this.studentPrismaService.countArchivedStudents();
  return count;
}

  @Query(() => Number)
  async countUnArchivedStudents(): Promise<number> {
    const count = await this.studentPrismaService.countUnArchivedStudents();
    return count;
  }

}
