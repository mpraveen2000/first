import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MerchantModule } from './Merchant/merchant.module';
import { CustomertModule } from './customer/customer.module';
import { GraphQlModule } from './Merchant/graphql/graphql.module';
import { EmployeeModule } from './emoloyee/employee.module';
import { PrismaAppModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaAppModule,
    MongooseModule.forRoot(
      'mongodb+srv://Praveen:9080109022@cluster0.0c9qbta.mongodb.net/?retryWrites=true&w=majority',
    ),
    StudentModule,
    MerchantModule,
    GraphQlModule,
    CustomertModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
