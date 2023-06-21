import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PurchasedCourseComponent } from './pages/purchased-course/purchased-course.component';
import { StudentsModule } from '../students/students.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import { ClassCardComponent } from './components/class-card/class-card.component';
import { BuyCourseComponent } from './components/buy-course/buy-course.component';
import { BuyCourseModalComponent } from './components/modals/buy-course-modal/buy-course-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PipesModule } from "../../pipes/pipes.module";
import { ModifyCourseModalComponent } from './components/modals/modify-course-modal/modify-course-modal.component';
import { DetailsCourseModalComponent } from './components/modals/details-course-modal/details-course-modal/details-course-modal.component';
import { DeleteCourseModalComponent } from './components/modals/delete-course-modal/delete-course-modal.component';



@NgModule({
    declarations: [
        CoursesComponent,
        PurchasedCourseComponent,
        ClassCardComponent,
        BuyCourseComponent,
        BuyCourseModalComponent,
        ModifyCourseModalComponent,
        DetailsCourseModalComponent,
        DeleteCourseModalComponent
    ],
    exports: [
        CoursesComponent,
        BuyCourseComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        RouterModule,
        StudentsModule,
        MatExpansionModule,
        MatDividerModule,
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        PipesModule
    ]
})
export class CoursesModule { }
