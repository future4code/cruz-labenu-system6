import {Request, Response} from 'express'
import connection from '../connection'
import dayjs from 'dayjs'

export const createClass = async (req: Request, res: Response) => {
    try {
        let {name, initialDate, finalDate, classModule } = req.body

        if(!name || !initialDate || !finalDate || !classModule) {
            throw new Error("Missing parameters. name, email and birthDate(YYYY-MM-DD) are required.")
        }

        if(!dayjs(initialDate).isValid() || !dayjs(finalDate).isValid()) {
            throw new Error("Invalid date.")
        }

        finalDate = dayjs(finalDate).format("YYYY-MM-DD")
        initialDate = dayjs(initialDate).format("YYYY-MM-DD")

        await connection("class").insert({
                                        name, 
                                        initial_date: initialDate, 
                                        final_date: finalDate, 
                                        class_module: classModule})
    
        res.status(201).send("Class created!")
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}