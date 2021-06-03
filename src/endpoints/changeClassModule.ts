import { Response, Request } from "express";
import connection from "../connection";

export const changeClassModule = async (req: Request, res: Response) => {
  try {
    let result = await connection.raw(`
        SELECT * FROM class
        WHERE class.id = ${req.params.id}
        `);
    if (result[0].length === 0) {
      throw new Error("No class found with this id.");
    } else {
      if (req.body.classModule >= 0 && req.body.classModule <= 7) {
        const result = await connection.raw(`
            UPDATE class
            SET class_module = "${req.body.classModule}"
            WHERE id = "${req.params.id}"
        `);
        if (result[0].changedRows === 0) {
          throw new Error(
            "No changes were made. Class was already in this module."
          );
        } else {
          res.status(201).send("Class module changed!");
        }
      } else {
        throw new Error("Class module value must be between 0 and 7.");
      }
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
