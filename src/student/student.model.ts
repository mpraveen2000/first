import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Student {
  @Field()
  id?: string;

  // @Field({ defaultValue: false })
  // archived: boolean;

  @Field({ nullable: true })
  StudentName?: string;
  @Field({ nullable: true })
  StudentAddress?: string;
  @Field({ nullable: true })
  StudentDistrict?: string;
  @Field({ nullable: true })
  StudentSubject?: string;
  @Field({ nullable: true })
  StudentNotes?: string;
  @Field({ nullable: true })
  Employeeid?: string;
  @Field({ nullable: true })
  archived?: boolean;
  
}

