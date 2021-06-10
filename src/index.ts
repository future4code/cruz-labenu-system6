import app from "./app";
import { createClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { getStudents } from "./endpoints/getStudents";
import { createTeacher } from "./endpoints/createTeacher";
import { addStudentToClass } from "./endpoints/addStudentToClass";
import { addTeacherToClass } from "./endpoints/addTeacherToClass";
import { getStudentAge } from "./endpoints/getStudentAge";
import { getStudentsByClass } from "./endpoints/getStudentsByClass";
import { getTeachersByClass } from "./endpoints/getTeachersByClass";
import { getStudentsByHobby } from "./endpoints/getStudentsByHobby";
import { deleteStudent } from "./endpoints/deleteStudent";
import { deleteStudentFromClass } from "./endpoints/deleteStudentFromClass";
import { deleteTeacherFromClass } from "./endpoints/deleteTeacherFromClass";
import { changeClassModule } from "./endpoints/changeClassModule";

app.get("/students/all", getStudents);

app.post("/student", createStudent);

app.post("/teacher", createTeacher);

app.post("/students-class/:id", addStudentToClass);

app.post("/class", createClass);

app.post("/teacher/:teacherId", addTeacherToClass);

app.get("/student/age/:id", getStudentAge);

app.get("/students-class", getStudentsByClass);

app.get("/teachers-class", getTeachersByClass);

app.get("/students-hobby", getStudentsByHobby);

app.post("/student/:id/remove-from-class", deleteStudentFromClass);

app.delete("/student/:id", deleteStudent);

app.post("/teacher/:id/remove-from-class", deleteTeacherFromClass);

app.post("/class/:id/change-module", changeClassModule);
