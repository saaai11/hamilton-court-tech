import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Employee, Employees } from '../employee.model';
import { State } from './employee.reducer';

export const employeeState = createFeatureSelector<Employees>('employee');

export const getEmployees = createSelector(employeeState, (state) => {
  return state.employees;
});
