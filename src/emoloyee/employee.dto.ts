import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class EmployeeDetailDto {
  @Field({ nullable: true })
  Name?: string;
  @Field({ nullable: true })
  PhoneNumber?: number;
  @Field({ nullable: true })
  Address?: string;
  @Field({ nullable: true })
  District?: string;
  @Field({ nullable: true })
  CompanyName?: string;
  @Field({ nullable: true })
  archived?: boolean;
}

