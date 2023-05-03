import * as mongoose from 'mongoose';
export const StudentSchema = new mongoose.Schema({
  StudentName: String,
  StudentAddress:String ,
  StudentDistrict: String,
  StudentSubject: String,
  StudentNotes: String,
  Employeeid:String,
    archived:Boolean
  });


  