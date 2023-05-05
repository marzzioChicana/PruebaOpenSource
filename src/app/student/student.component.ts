import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgForm } from '@angular/forms';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  StudentForm!: NgForm;
  StudentData!: Student;
  dataSource = new MatTableDataSource();
  displayedColumns : string[] = ['id', 'name', 'age', 'mobile', 'email', 'address'];

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  isEditMode = false;

  @ViewChild(MatSort)
  sort!: MatSort;

  onSumit(){

    if(this.StudentForm.form.valid){
      console.log('valid');

      if(this.isEditMode){
        console.log('update');
        //this.updateStudent();
      } else{
        console.log('create');
        //this.addStudent();
      }

      this.cancelEdit();

    } else{
      console.log('invalid data');
    }

  }

  cancelEdit(){

    this.isEditMode = false;
    this.StudentForm.resetForm();

  }

}
