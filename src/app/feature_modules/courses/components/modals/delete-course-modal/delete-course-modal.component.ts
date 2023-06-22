import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import { DetailsCourseModalComponent } from '../details-course-modal/details-course-modal/details-course-modal.component';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.scss']
})
export class DeleteCourseModalComponent implements OnInit {

  course!: Course;

  constructor(
    private courseService: CourseService,
    private dialogRef: MatDialogRef<DetailsCourseModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,) { }

  ngOnInit(): void {
    this.course = this.data;
  }

  closeModal(){
    this.dialogRef.close()
  }

  deleteCourse() {
    this.courseService.deleteCourse(this.data.id);
    this.dialogRef.close();
  }
}
