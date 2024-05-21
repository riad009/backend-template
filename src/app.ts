import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { studentRoutes } from './app/modules/student/student.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1/students', studentRoutes)




const fetAController = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
}

app.get('/',fetAController);

export default app;
