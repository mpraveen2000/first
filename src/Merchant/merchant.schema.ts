import * as mongoose from 'mongoose';
export const MerchantSchema = new mongoose.Schema({
  userName: String,
  email: String,
  phone: Number,
  website: String,
  contactName: String,
  contactPhone: Number,
  contactEmail: String,
  notes: String,
  type: String,
  categories: [String],
  commissionPercentange: Number,
  activeform: Date,
  criticalAccount: Boolean,
  paymentOptions: [String],
  archived:Boolean,
});
