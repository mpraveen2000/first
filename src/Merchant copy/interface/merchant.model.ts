import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  @Field()
  id?: string;

  @Field({ nullable: true })
  userName?: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  phone?: number;
  @Field({ nullable: true })
  website?: string;
  @Field({ nullable: true })
  contactName?: string;
  @Field({ nullable: true })
  contactPhone?: number;
  @Field({ nullable: true })
  contactEmail?: string;
  @Field({ nullable: true })
  notes?: string;
  @Field({ nullable: true })
  type?: string;
  @Field({ nullable: true })
  categories?: string[];
  @Field({ nullable: true })
  commissionPercentange?: number;
  @Field({ nullable: true })
  activeform?: Date;
  @Field({ nullable: true })
  criticalAccount?: boolean;
  @Field({ nullable: true })
  paymentOptions?: string[];
  @Field({ nullable: true })
  archived?: Boolean;
}
