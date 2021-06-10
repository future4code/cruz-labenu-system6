import { Request, Response } from "express";
import connection from "../connection";

export const getStudentsByHobby = async (req: Request, res: Response) => {
  try {
    let result = await connection.raw(`
    SELECT * FROM hobby
    WHERE hobby.name LIKE "%${req.query.hobby}%"
    `);
    if (result[0].length === 0) {
      throw new Error("This hobby doesn't exists.");
    } else {
      let result = await connection.raw(`
        SELECT student.id, student.name, student.email FROM student
        JOIN student_hobby ON student_hobby.student_id = student.id
        JOIN hobby ON student_hobby.hobby_id = hobby.id
        WHERE hobby.name LIKE "%${req.query.hobby}%"
        ;`);
      if (result[0].length === 0) {
        throw new Error("No student has this hobby.");
      }
      res.status(200).send(result[0]);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
