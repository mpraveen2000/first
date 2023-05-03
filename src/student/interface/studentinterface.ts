import {Document}from 'mongoose'
export interface student extends Document{
     StudentName:string;
     StudentAddress: string;
     StudentDistrict: string;
     StudentSubject: string;
     StudentNotes: string;
     Employeeid:string;
     archived:Boolean;
}