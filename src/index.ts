import { Request, Response } from "express";

import app from "./app";
import connection from "./connection";

app.get("/students/all", async (req: Request, res: Response) => {
  try {
    const result = await connection("student").select();

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
