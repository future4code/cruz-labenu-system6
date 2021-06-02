import app from "./app";
import { createStudent } from "./endpoints/createStudent";
import { getStudents } from "./endpoints/getStudents";
import { createTeacher } from "./endpoints/createTeacher";
import { addStudentToClass } from "./endpoints/addStudentToClass";


app.get("/students/all", getStudents);

app.post('/student', createStudent);

app.post("/teacher", createTeacher);

app.post("/students-class/:id", addStudentToClass);
