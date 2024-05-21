import { Schema, model, connect } from 'mongoose';
import { Student } from './student/student.interface';


const studentSchema = new Schema<Student>({
    id: { type: String },
    name: { type: String },
    gender: ['female', 'male'],
    guardian: {

        fatherName: {
            type: String,
        },
        motherName: {
            type: String,
        }

    },



})



export const StudentModel = model<Student>('Student', studentSchema)