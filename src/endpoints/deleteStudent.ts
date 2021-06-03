import { Response, Request } from "express";
import connection from "../connection";

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    let result = await connection.raw(`
        SELECT * FROM student
        WHERE student.id = ${req.params.id}
        `);
    if (result[0].length === 0) {
      throw new Error("No student found with this id.");
    } else {
      await connection("student").where({ id: req.params.id }).delete();
      res.status(201).send("Student deleted!");
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
