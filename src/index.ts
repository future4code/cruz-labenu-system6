import app from "./app";
import { createStudent } from "./endpoints/createStudent";
import { getStudents } from "./endpoints/getStudents";
import { createTeacher } from "./endpoints/createTeacher";


app.get("/students/all", getStudents);

app.post('/student', createStudent);

app.post("/teacher", createTeacher);
