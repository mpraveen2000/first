import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Customer {
  @Field()
  id?: string;

  // @Field({ defaultValue: false })
  // archived: boolean;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  mobile?: string;

  
}
