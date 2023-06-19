//DESCRIPCIÓN: Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se  le asignan Alumnos (2) //
class Escuela {
    constructor() {
      this.cursos = new Array();
    }
    agregarCurso(curso) {
      this.cursos.push(curso);
    }
    getCursos() {
      return this.cursos;
    }
  }
  class Curso {
    constructor(nombre) {
      this.nombre = nombre;
      this.alumnos = new Array();
    }
    agregarAlumno(alumno) {
      this.alumnos.push(alumno);
    }
    getAlumnos() {
      return this.alumnos;
    }
  }
  class Alumno {
    constructor(nombre) {
      this.nombre = nombre;
    }
    getNombre() {
      return this.nombre;
    }
  }
  const escuela = new Escuela();
escuela.agregarCurso(new Curso("Matemáticas"));
escuela.agregarCurso(new Curso("Física"));
escuela.agregarAlumno(new Alumno("Juan"));
escuela.agregarAlumno(new Alumno("Pedro"));
const cursos = escuela.getCursos();
const alumnos = escuela.getAlumnos();