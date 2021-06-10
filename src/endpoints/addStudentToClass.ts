import { Request, Response } from "express";
import connection from "../connection";

export const addStudentToClass = async (
    req: Request,
    res: Response
) => {
    try {
     
        const result = await connection.raw(`
            UPDATE student
            SET class_id = "${req.body.class_id}"
            WHERE id = "${req.params.id}"
        `)

        if(result[0].changedRows === 0) {
            throw new Error("No changes were made. Either student does not exists or there is not a change to already assigned class")
        }     

        res.status(200).send("Student added to class.")

        

    } catch (err) {
        if (err.message.includes("a foreign key constraint fails")) {  
               res.status(400).send("Class does not exists.");  
        } else {
            res.status(500).send({ message: err.message })
        }
        
    }
} 
