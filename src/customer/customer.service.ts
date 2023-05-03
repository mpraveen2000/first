import { Injectable } from '@nestjs/common';
import { Customer } from './customer.model';
import { CustomerDetailDto } from './customer.dto';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private customerModel: Model<Customer>,
  ) {}
  async createContact(createCustomer: CustomerDetailDto): Promise<Customer> {
    const Customer = await this.customerModel.create({
      ...createCustomer,
    });
    return Customer;
  }
  
  async deleteContact(id: string): Promise<Customer> {
    const data = await this.customerModel.findById({
      _id: new Types.ObjectId(id),
    });

    let deletedCustomer;
    if (data) {
      deletedCustomer = await this.customerModel.findOneAndDelete({
        _id: id,
      });
    }
    return deletedCustomer;
  }

  async getAllCustomers(): Promise<Customer[]> {
  const customers = await this.customerModel.find();
  return customers;
}

// async getPhone(mobile: string): Promise<Customer[] | null> {
//   const customer: Customer[] = await this.customerModel.find({ mobile: mobile });
//   return customer;
// }

async getCustomersByMobiles(mobiles: string[]): Promise<Customer[]> {
  const customers = await this.customerModel.find({ mobile: { $in: mobiles } });
  return customers;
}

}

