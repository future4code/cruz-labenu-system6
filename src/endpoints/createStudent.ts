import dayjs from 'dayjs'
import {Response, Request} from 'express'
import connection from '../connection'

export const createStudent = async (req: Request, res: Response) => {
    try {
        let { name, email, birthDate} = req.body

        if(!name || !email || !birthDate) {
            throw new Error("Missing parameters. name, email and birthDate(YYYY-MM-DD) are required.")
        }

        if(!dayjs(birthDate).isValid()) {
            throw new Error("Invalid date.")
        }

        birthDate = dayjs(birthDate).format("YYYY-MM-DD")

        await connection("student")
                    .insert( {name, email, birth_date:birthDate} )


        res.status(201).send("Student created!")
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}