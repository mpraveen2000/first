import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { EmployeeSchema } from './employee.schema';
import { EmployeePrismaResolver } from './prisma/employee-prisma.resolver';
import { EmployeePrismaService } from './prisma/employee-prisma.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  providers: [EmployeeService, EmployeeResolver, EmployeePrismaResolver, EmployeePrismaService],
})
export class EmployeeModule {}
