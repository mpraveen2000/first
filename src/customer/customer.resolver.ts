import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { Customer } from './customer.model';
import { CustomerDetailDto } from './customer.dto';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Mutation(() => Customer)
  async createContact(
    @Args('createCustomer') createCustomer: CustomerDetailDto,
  ): Promise<Customer> {
    return await this.customerService.createContact(createCustomer);
  }

  @Mutation(() => Customer)
  async deleteContact(@Args('id') id: string): Promise<Customer> {
    return await this.customerService.deleteContact(id);
  }

  @Query(() => [Customer])
  async getAllCustomers(): Promise<Customer[]> {
    const customers = await this.customerService.getAllCustomers();
    return customers;
  }
  @Query(() => [Customer], { nullable: true })
  async getCustomersByPhones(
    @Args('mobiles', { type: () => [String] }) mobiles: string[],
  ): Promise<Customer[] | null> {
    console.log(mobiles);
    const customers = await this.customerService.getCustomersByMobiles(mobiles);
    return customers;
  }
}
