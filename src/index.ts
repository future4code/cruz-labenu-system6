import app from "./app";
import { createStudent } from "./endpoints/createStudent";
import { getStudents } from "./endpoints/getStudents";


app.get("/students/all", getStudents);

app.post('/student', createStudent)
