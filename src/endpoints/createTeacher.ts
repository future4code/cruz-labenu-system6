import { Request, Response } from "express";
import connection from "../connection";
import dayjs from "dayjs";

export const createTeacher = async (
    req: Request,
    res: Response
) => {
    try {
        let { name, email, birthDate } = req.body

        if(!name || !email || !birthDate) {
            throw new Error("Missing parameters. name, email and birthDate(YYYY-MM-DD) are required.")
        }

        if(!dayjs(birthDate).isValid()) {
            throw new Error("Invalid date.")
        }

        await connection("teacher")
                .insert({name, email, birth_date: birthDate})
        res.status(201).send("Created teacher")

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
} 

    
    

