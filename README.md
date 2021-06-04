### <p align="center">💻 Labenu System 6 💻</p>

<div align="center" margin-bottom="10px">
  <i>Gabriel Dienstmann Musse, Laís de Jesus, Luana Farias da Silva</i>
</div> 
&nbsp

### Funcionamento 🛠
- [x] Criar estudante;
- [x] Criar docente;
- [x] Criar turma;
- [x] Adicionar estudante na turma;
- [x] Adicionar docente na turma;
- [x] Pegar a idade de algum estudante a partir do id
- [x] Exibir estudantes de uma turma;
- [x] Exibir docentes de uma turma;
- [x] Exibir estudantes que possuam o mesmo hobby;
- [x] Remover estudante de uma turma;
- [x] Remover estudante;
- [x] Remover docente de uma turma;
- [x] Mudar turma de módulo

### Endpoints

- **Criar estudante**
  * File name: createStudent.ts
  * Method: POST
  * Path: /student
  * Body:
      + Name
      + Email
      + BirthDate

- **Criar docente**
  * File name: createTeacher.ts
  * Method: POST
  * Path: /teacher
  * Body:
      + Name
      + Email
      + BirthDate
  
- **Criar Turma**
  * File name: createClass.ts
  * Method: POST
  * Path: /createClass
  * Body:
      + Name
      + initialDate
      + finalDate
      + classModule
  
- **Adicionar estudante a turma**
  * File name: addStudentToClass.ts
  * Method: POST
  * Path: /students-class/:id
  * Body:
      + class_id
  
- **Adiconar Docente a turma**
  * File name: addTeacherToClass.ts
  * Method: POST
  * Path: /teacher/:teacherId
  * Body:
    + classId
  
- **Pegar a idade de algum estudante a partir do id**
  * File name: getStudentAge.ts
  * Method: GET
  * Path: /student/age/:id
  * Body: ------
- **Exibir estudantes de uma turma**
  * File name: getStudentsByClass.ts
  * Method: GET
  * Path: /students-class
  * Body: ------
  
- **Exibir docentes de uma turma**
  * File name: getTeachersByClass.ts
  * Method: GET
  * Path: /teachers-class
  * Body: ------
  
- **Exibir estudantes que possuam o mesmo hobby
  * File name: getStudentsByHobby.ts
  * Method: GET
  * Path: /students-hobby
  * Body: ------
  
- **Remover estudante de uma turma**
  * File name: deleteStudentFromClass.ts
  * Method: POST
  * Path: /student/:id/remove-from-class
  * Body: ------
  
- **Remover estudante**
  * File name: deleteStudent.ts
  * Method: DELETE
  * Path: /student/:id
  * Body: ------
  
- **Remover docente de uma turma**
  * File name: deleteTeacherFromClass.ts
  * Method: POST
  * Path: /teacher/:id/remove-from-class
  * Body: ------
  
- **Mudar turma de módulo**
  * File name: changeClassModule.ts
  * Method: POST
  * Path: /class/:id/change-module
  * Body:
      + classModule
  


