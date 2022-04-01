import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import {
  addEmployee,
  addEmployeeSuccess,
  loadEmployees,
  loadEmployeesFailure,
  loadEmployeesSuccess,
} from './employee.action';

@Injectable()
export class EmployeeEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  addEmployee$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addEmployee),
      switchMap((action) => this.dataService.addEmployee(action.employee)),
      map((response) => {
        return addEmployeeSuccess();
      })
    );
  });

  loadEmployees$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadEmployees),
      switchMap(() => this.dataService.getEmployees()),
      map((response) => {
        return loadEmployeesSuccess({ employees: response });
      })
    );
  });
}
