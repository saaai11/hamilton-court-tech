import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';

import { Employee } from 'src/app/store/employee.model';
import { loadEmployees } from 'src/app/store/employee/employee.action';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  @Input()
  employees$!: Observable<Employee[]>;

  constructor(private dialog: MatDialog, private store: Store<AppState>) {}

  editEmployee(employee: Employee) {
    this.dialog
      .open(EditEmployeeComponent, {
        data: employee,
        width: '80vw',
      })
      .afterClosed()
      .subscribe(() => {
        this.store.dispatch(loadEmployees());
      });
  }

  ngOnInit(): void {}
}
