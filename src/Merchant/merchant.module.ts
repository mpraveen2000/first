import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MerchantController } from './merchant.controller';
import { MerchantSchema } from './merchant.schema';
import { MerchantService } from './merchant.service';
// import { MerchantResolver } from './merchant.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'merchant', schema: MerchantSchema }]),
  ],
  controllers: [MerchantController],
  providers: [MerchantService,]
})
export class MerchantModule {}
