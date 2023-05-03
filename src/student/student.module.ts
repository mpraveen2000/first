import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './student.controller';
import { StudentSchema } from './student.scema';
import { StudentService } from './student.service';
import { StudentPrismaResolver } from './prisma/student-prisma.resolver';
import { StudentPrismaService } from './prisma/student-prisma.service';
@Module({
  imports :[MongooseModule.forFeature([{name:'Student',schema:StudentSchema}])],
  controllers: [StudentController],
  providers: [StudentService, StudentPrismaResolver, StudentPrismaService]
})
export class StudentModule {}
