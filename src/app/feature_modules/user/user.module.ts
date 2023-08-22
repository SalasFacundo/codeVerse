import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ModifyUserComponent } from './pages/modify-user/modify-user.component';
import { UserDataComponent } from './components/user-data/user-data.component';



@NgModule({
  declarations: [
    ModifyUserComponent,
    UserDataComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
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
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PipesModule,
    MatSnackBarModule
  ],
  exports: [
    ModifyUserComponent
  ]
})
export class UserModule { }
