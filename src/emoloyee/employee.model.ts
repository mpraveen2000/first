import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  @Field()
  id?: string;

  // @Field({ defaultValue: false })
  // archived: boolean;

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
