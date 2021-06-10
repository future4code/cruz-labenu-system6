import { Request, Response } from "express";
import connection from "../connection";

export const getStudentsByClass = async (req: Request, res: Response) => {
  try {
    let result = await connection.raw(`
    SELECT * FROM class
    WHERE class.name LIKE "%${req.query.class}%"
    `);
    if (result[0].length === 0) {
      throw new Error("This class doesn't exists.");
    } else {
      let result = await connection.raw(`
      SELECT student.id, student.name, student.email FROM student
      JOIN class ON class.id = student.class_id
      WHERE class.name LIKE "%${req.query.class}%"
      `);
      if (result[0].length === 0) {
        throw new Error("There isn't a student in this class.");
      }
      res.status(200).send(result[0]);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
