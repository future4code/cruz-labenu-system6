import {Request, Response} from 'express'
import connection from '../connection'

export const createClass = async (req: Request, res: Response) => {
    try {
        let {name, initialDate, finalDate, module } = req.body

        await connection("class").insert({
                                        name, 
                                        initial_date: initialDate, 
                                        final_date: finalDate, 
                                        module})
    
        res.status(201).send("Class created!")
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}