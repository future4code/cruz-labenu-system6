import { Request, Response } from "express";
import connection from "../connection";

export const getTeachersByClass = async (req: Request, res: Response) => {
  try {
    let result = await connection.raw(`
    SELECT * FROM class
    WHERE class.name LIKE "%${req.query.class}%"
    `);
    if (result[0].length === 0) {
      throw new Error("This class doesn't exists.");
    } else {
      let result = await connection.raw(`
      SELECT teacher.id, teacher.name, teacher.email FROM teacher
      JOIN class ON class.id = teacher.class_id
      WHERE class.name LIKE "%${req.query.class}%"
      `);
      if (result[0].length === 0) {
        throw new Error("There isn't a teacher in this class.");
      }
      res.status(200).send(result[0]);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
