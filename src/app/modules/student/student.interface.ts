import { Schema, model, connect } from 'mongoose';



export type Guardian = {
    fatherName: string;
    motherName: string;
}
export type Name = {

    firstName: string;
    middleName: string;
    lastName: string;

}


export type Student = {
    id: string;
    name: Name;
    gender: "male" | "female";
    guardian: Guardian
  
} 