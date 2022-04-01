import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { Employee } from 'src/app/store/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
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
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    private dialogRef: MatDialogRef<EditEmployeeComponent>,
    private dataService: DataService
  ) {}

  edit() {
    this.employee.id = this.data.id;
    this.employee.name = this.addEmployeeForm.value.name;
    this.employee.email = this.addEmployeeForm.value.email;
    this.employee.contactNumber = this.addEmployeeForm.value.contact;
    this.dataService.editEmployee(this.employee);

    this.close();
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.addEmployeeForm.setValue({
      name: this.data.name,
      email: this.data.email,
      contact: this.data.contactNumber,
    });
  }
}
