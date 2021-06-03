import { Response, Request } from "express";
import connection from "../connection";

export const deleteStudentFromClass = async (req: Request, res: Response) => {
  try {
    let result = await connection.raw(`
        SELECT * FROM student
        WHERE student.id = ${req.params.id}
        `);
    if (result[0].length === 0) {
      throw new Error("No student found with this id.");
    } else {
      const result = await connection.raw(`
            UPDATE student
            SET class_id = null
            WHERE id = "${req.params.id}"
        `);
      if (result[0].changedRows === 0) {
        throw new Error(
          "No changes were made. Student wasn't assigned to any class."
        );
      } else {
        res.status(201).send("Student removed from class successfully!");
      }
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
