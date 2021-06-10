import {Request, Response} from 'express'
import connection from '../connection'

export const addTeacherToClass = async (req: Request, res: Response) => {
    try {
        
        let { classId } = req.body //id turma
        let  { teacherId }  = req.params //id prof

        const result = await connection.raw(`
        UPDATE teacher
        SET class_id = "${classId}"
        WHERE id = "${teacherId}"
    `)
    if(result[0].changedRows === 0) {
        throw new Error("No changes were made. Either teacher does not exists or there is not a change to already assigned class")
    } else  {
        res.status(201).send("Teacher added!")
    }  
        
    } catch (err) {
        if (err.message.includes("a foreign key constraint fails")) {  
            res.status(400).send("Class does not exists.");  
     } else {
        res.status(500).send({message: err.message})
     }
        
    }
}