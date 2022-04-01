import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Employee } from '../store/employee.model';
import {
  addEmployee,
  loadEmployees,
  loadEmployeesSuccess,
} from 'src/app/store/employee/employee.action';
import { getEmployees } from 'src/app/store/employee/employee.selector';
import { Observable } from 'rxjs';
import { Device } from '../store/devices/device.model';
import { getDevice } from '../store/devices/device.selector';
import { AppState } from '../app.state';
import { loadDevices } from '../store/devices/device.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  employees$: Observable<Employee[]> = this.store.pipe(select(getEmployees));

  devices$: Observable<Device[]> = this.store.pipe(select(getDevice));

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
    this.store.dispatch(loadDevices());
  }
}
