import app from "./app";
import { createClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { getStudents } from "./endpoints/getStudents";
import { createTeacher } from "./endpoints/createTeacher";
import { addStudentToClass } from "./endpoints/addStudentToClass";
import { addTeacherToClass } from './endpoints/addTeacherToClass'


app.get("/students/all", getStudents);

app.post('/student', createStudent);

app.post("/teacher", createTeacher);

app.post("/students-class/:id", addStudentToClass);

app.post('/student', createStudent)

app.post('/createClass', createClass)

app.post('/teacher/:teacherId', addTeacherToClass)
