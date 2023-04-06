import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCrearAlumnoComponent} from './components/modal-crear-alumno/modal-crear-alumno.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public dialog: MatDialog
  ){}

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalCrearAlumnoComponent, {
      width: '350px',
      data: 'Are you sure the deletion of this data?'
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if(res){
        console.log('Delete file')
      }
    })
  }
}
