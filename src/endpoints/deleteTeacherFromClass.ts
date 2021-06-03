import { Response, Request } from "express";
import connection from "../connection";

export const deleteTeacherFromClass = async (req: Request, res: Response) => {
  try {
    let result = await connection.raw(`
        SELECT * FROM teacher
        WHERE teacher.id = ${req.params.id}
        `);
    if (result[0].length === 0) {
      throw new Error("No teacher found with this id.");
    } else {
      const result = await connection.raw(`
            UPDATE teacher
            SET class_id = null
            WHERE id = "${req.params.id}"
        `);
      if (result[0].changedRows === 0) {
        throw new Error(
          "No changes were made. Teacher wasn't assigned to any class."
        );
      } else {
        res.status(201).send("Teacher removed from class successfully!");
      }
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
