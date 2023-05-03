import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
import { EmployeeDetailDto } from './employee.dto';

@Resolver(() => Employee)
export class EmployeeResolver {
  public get EmployeeService(): EmployeeService {
    return this._EmployeeService;
  }
  public set EmployeeService(value: EmployeeService) {
    this._EmployeeService = value;
  }
  constructor(private _EmployeeService: EmployeeService) {}

  @Mutation(() => Employee)
  async createEmployeeContact(
    @Args('createEmployee') createEmployee: EmployeeDetailDto,
  ): Promise<Employee> {
    console.log(createEmployee, 'wiefb');
    return await this.EmployeeService.createEmployeeContact(createEmployee);
  }

  @Mutation(() => Employee)
  async deleteEmployeeContact(@Args('id') id: string): Promise<Employee> {
    return await this.EmployeeService.deleteEmployeeContact(id);
  }

  @Query(() => [Employee])
  async getAllEmployees(): Promise<Employee[]> {
    const Employees = await this.EmployeeService.getAllEmployees();
    return Employees;
  }
  @Query(() => [Employee], { nullable: true })
  async getEmployeesByPhones(
    @Args('mobiles', { type: () => [String] }) mobiles: string[],
  ): Promise<Employee[] | null> {
    // console.log(mobiles);
    const customers = await this.EmployeeService.getEmployeesByPhones(mobiles);
    return customers;
  }

  @Mutation(() => Employee)
  async updateOneEmployee(
    @Args('id') id: string,
    @Args('data') data: EmployeeDetailDto,
  ): Promise<Employee> {
    return await this.EmployeeService.updateOneEmployee(id, data);
  }

  @Query(() => Number)
  async countArchivedEmployees(): Promise<number> {
    const count = await this.EmployeeService.countArchivedEmployees();
    return count;
  }

  @Query(() => Number)
  async countUnarchivedEmployees(): Promise<number> {
    const count = await this.EmployeeService.countUnArchivedEmployees();
    return count;
  }
  @Query(() => [Employee], { nullable: true })
  async getOrCondition(@Args('search') search: string): Promise<Employee[]> {
    const employees = await this.EmployeeService.getOrCondition(search);
    return employees;
  }
  @Query(() => [Employee], { nullable: true })
  async getAndCondition(@Args('search') search: string): Promise<Employee[]> {
    const employees = await this.EmployeeService.getAndCondition(search);
    return employees;
  }

}