import app from "./app";
import { createClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { getStudents } from "./endpoints/getStudents";


app.get("/students/all", getStudents);

app.post('/student', createStudent)

app.post('/createClass', createClass)
