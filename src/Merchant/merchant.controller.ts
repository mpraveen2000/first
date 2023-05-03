import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
} from '@nestjs/common/decorators';
import { MerchantService } from './merchant.service';
import { Merchant } from './interface/merchant.interface';
import { merchantDTO } from './dto/merchant.dto';

@Controller('merchant')
export class MerchantController {
  studentservice: any;
  constructor(private merchantservice: MerchantService) {}

  @Get('/getAllMerchants')
  async getAllmerchant(): Promise<Merchant[]> {
    // console.log('fzf');
    return await this.merchantservice.getmerchants();
  }

  @Get('/getMerchantById/:id')
  async getOnemerchant(@Param('id') id: string): Promise<Merchant> {
    console.log(id);
    return await this.merchantservice.getOnemerchant(id);
  }
  @Post('/updateMerchant/:id')
  async updateOnemerchant(
    @Param('id') id: string,
    @Body('body') data: merchantDTO,
  ): Promise<Merchant> {
    return await this.merchantservice.updateOnemerchant(id, data);
  }

  @Delete('/deleteMerchant/:id')
  async deletemerchant(@Param('id') id: string): Promise<Merchant> {
    return await this.merchantservice.deletemerchant(id);
  }
  @Post('/createMerchnat')
  async createMerchnat(@Body('data') data: merchantDTO) {
    return await this.merchantservice.createMerchant(data);
  }
}
