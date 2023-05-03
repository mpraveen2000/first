import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Merchant } from './interface/merchant.interface';
import { merchantDTO } from './dto/merchant.dto';
@Injectable()
export class MerchantService {
  constructor(
    @InjectModel('merchant') private merchantModel: Model<Merchant>,
  ) {}

  async getmerchants(): Promise<Merchant[]> {
    return await this.merchantModel.find({ archived: false }).exec();
  }

  async getOnemerchant(id: string): Promise<Merchant> {
    return await this.merchantModel.findById({ _id: new Types.ObjectId(id) });
  }

  async updateOnemerchant(id: string, data: merchantDTO): Promise<Merchant> {
    return await this.merchantModel.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      { ...data },
      {
        new: true,
      },
    );
  }

  async createMerchant(data: merchantDTO): Promise<Merchant> {
    const merchant = await this.merchantModel.create({
      ...data,
      archived: false,
    });
    return merchant;
  }
  async deletemerchant(id: any): Promise<Merchant> {
    return await this.merchantModel.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      { archived: true },
    );
  }
}
