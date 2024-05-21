import { studentServices } from "./student.service"

const createStudent = async(req: Request, res: Response) => {
try{
    
  const {student : studentData} = req.body
  //will call service center to this data
  const result = await  studentServices.createStudentIntoDB
  (studentData)

  // send response 

  res.status(200).json({

    success: true,
    message: "success",
    data: result,
  })
} catch(err){
   console.log(err)
}

}


export const studentController = {
    createStudent,
}