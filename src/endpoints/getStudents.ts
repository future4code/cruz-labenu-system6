import {Request, Response} from 'express'
import connection from '../connection'

export const getStudents = async (req: Request, res: Response) => {
    try {
      const result = await connection("student").select();
  
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };