import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Employee } from '../employee.model';
import { EmployeePrismaService } from './employee-prisma.service';
import { EmployeeDetailDto } from '../employee.dto';

@Resolver(() => Employee)
export class EmployeePrismaResolver {
 
  constructor(private readonly employeePrismaService: EmployeePrismaService) {}

  @Mutation(() => Employee)
  async createEmployeePrisma(
    @Args('createEmployee') createEmployee: EmployeeDetailDto,
  ): Promise<Employee> {
    console.log(createEmployee, 'wiefb');
    return await this.employeePrismaService.createEmployeePrisma(createEmployee);
  }
  @Query(() => [Employee])
  async getAllPrismaEmployees(): Promise<Employee[]> {
    const Employees = await this.employeePrismaService.getAllPrismaEmployees();
    return Employees;
  }
  @Mutation(() => Employee)
  async updatePrismaEmployee(
    @Args('id') id: string,
    @Args('updateData') updateData: EmployeeDetailDto,
  ): Promise<Employee> {
    const updatedEmployee = await this.employeePrismaService.updatePrismaEmployee(id, updateData);
    return updatedEmployee;
  }
  @Mutation(() => Employee)
async deletePrismaEmployee(
  @Args('id') id: string,
): Promise<Employee> {
  return await this.employeePrismaService.deletePrismaEmployee(id);
}

}
