import app from "./app";
import { createClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { getStudents } from "./endpoints/getStudents";
import { addTeacherToClass } from './endpoints/addTeacherToClass'


app.get("/students/all", getStudents);

app.post('/student', createStudent)

app.post('/createClass', createClass)

app.post('/teacher/:teacherId', addTeacherToClass)
