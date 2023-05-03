import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CustomerDetailDto {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  mobile?: number;
}
