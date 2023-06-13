import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd } from '@angular/router';
import { asapScheduler } from 'rxjs';
import { ModifyCourseModalComponent } from 'src/app//feature_modules//courses/components/modals/modify-course-modal/modify-course-modal.component';
import { Course } from 'src/app//feature_modules//students/models/course';
import { UserRoleEnum } from 'src/app/enums/UserRoleEnum';
import { DatosService } from 'src/app/services/datos.service';
import { LoginService } from 'src/app/services/loginService';
import { UpdateRouteService } from 'src/app/services/update-route.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss'],
})
export class AllCoursesComponent implements OnInit {
  currentUrl = window.location.pathname;
  userLogged = this.loginService.getUser();
  userIsAdmin!: boolean;

  constructor(
    private updateRoute: UpdateRouteService,
    private datosService: DatosService,
    private loginService: LoginService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.updateRoute.subscribeToUrlChanges().subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
    this.userIsAdmin = this.userLogged.role != UserRoleEnum.ADMIN;
  }


  openAddCourseModal(){
    const dialog = this.matDialog.open(ModifyCourseModalComponent, {data: "add"});
    dialog.afterClosed().subscribe((valor) => {
      if (valor.action == "add") {
      this.datosService.addCourse(valor.value)
      }
    })
  }

  /* agregarCurso(){
    let course: Course = {
      "id": 1,
        "name": "Introducción a Pythonssssssssssssssss",
        "capacity": 50,
        "teachers": [51,52,53],
        "students": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "classes": [
            {
                "name": "Clase 1: Introducción a Python",
                "description": "En esta clase se presentará el lenguaje de programación Python, sus características y beneficios. También se mostrará cómo instalar Python y configurar el entorno de trabajo."
            },
            {
                "name": "Clase 2: Variables y tipos de datos",
                "description": "En esta clase se enseñará cómo crear y manipular variables en Python, y se presentarán los diferentes tipos de datos básicos como números, cadenas de texto y booleanos."
            },
            {
                "name": "Clase 6: Estructuras de control de flujo",
                "description": " En esta clase se explicará cómo controlar el flujo de ejecución de un programa en Python utilizando estructuras como if-else, while, for y try-except."
            },
            {
                "name": "Clase 4: Funciones",
                "description": "En esta clase se presentarán las funciones en Python, cómo crearlas, llamarlas y pasar argumentos a ellas. También se discutirá sobre la importancia de las funciones y cómo se utilizan en la programación."
            },
            {
                "name": "Clase 5: Listas y diccionarios",
                "description": "En esta clase se mostrará cómo utilizar listas y diccionarios en Python para almacenar y manipular datos. También se discutirán las operaciones básicas en estas estructuras de datos y se darán ejemplos de su uso en programas simples."
            },
            {
                "name": "Clase 6: Archivos y excepciones",
                "description": "En esta clase se enseñará cómo trabajar con archivos en Python, cómo leer y escribir en ellos, y cómo cerrarlos adecuadamente. También se explicará cómo manejar excepciones en Python, incluyendo cómo lanzar excepciones, cómo manejarlas y cómo crear excepciones personalizadas."
            }
        ],
        "price": 34326,
        "startDate": new Date(),
        "endDate": new Date()
    }

    this.dataService.addCourse(course);
  } */
}
