import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class studentDTO {
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
}
