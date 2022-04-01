import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Employee } from 'src/app/store/employee.model';
import { addEmployee } from 'src/app/store/employee/employee.action';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm: FormGroup = this.formBuilder.group({
    name: [''],
    email: [''],
    contact: [''],
  });
  employee: Employee = {
    id: 0,
    name: '',
    email: '',
    contactNumber: '',
  };
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddEmployeeComponent>,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}
  add() {
    this.employee.name = this.addEmployeeForm.value.name;
    this.employee.email = this.addEmployeeForm.value.email;
    this.employee.contactNumber = this.addEmployeeForm.value.contact;
    this.store.dispatch(addEmployee({ employee: this.employee }));
  }
  close() {
    this.dialogRef.close();
  }
}
