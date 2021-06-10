import dayjs from "dayjs";
import { Request, Response } from "express";
import connection from "../connection";


export const getStudentAge = async (req: Request, res: Response) => {
  try {

    let result = await connection("student")
    .select("birth_date")
    .where({id: req.params.id})
    
    const bd = dayjs(result[0].birth_date)
    const today = dayjs()
    const age = today.diff(bd, "years")
    res.status(200).send({age});

  } catch (error) {
      if(error.message.includes("of undefined")){
        res.status(400).send("Student not found."); 
      } else {
        res.status(400).send(error.message);
      }

  }
};
