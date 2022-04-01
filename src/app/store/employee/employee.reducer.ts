import { Action, createReducer, on } from '@ngrx/store';
import { Employee, Employees } from '../employee.model';
import {
  addEmployee,
  loadEmployees,
  loadEmployeesFailure,
  loadEmployeesSuccess,
} from './employee.action';

export interface State extends Employees {
  employees: Employee[];
  error: string;
}
export const initialState: Employees = {
  employees: [],
};

export const employeeReducer = createReducer(
  initialState,
  on(addEmployee, (state, action) => {
    let employee = { ...action.employee };
    employee.id = state.employees.length + 1;
    return {
      ...state,
      employees: [...state.employees, employee],
    };
  }),

  on(loadEmployees, (state, action) => {
    return {
      ...state,
    };
  }),
  on(loadEmployeesSuccess, (state, action) => {
    return {
      ...state,
      employees: action.employees,
    };
  })
  // on(loadEmployeesFailure, (state, action) => {
  //   return {
  //     ...state,
  //     error: action.error,
  //   };
  // })
);
