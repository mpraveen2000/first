import * as mongoose from 'mongoose';
export const EmployeeSchema = new mongoose.Schema({
  Name: String,
  PhoneNumber: Number,
  Address: String,
  CompanyName: String,
  Distric:String,
  archived:Boolean
});

