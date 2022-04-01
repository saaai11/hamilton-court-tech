import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../store/employee.model';
import { AbstractDataService } from './data.abstract.service';

@Injectable()
export class MockDataService implements AbstractDataService {
  public addEmployee(employee: Employee) {
    throw new Error('Method not implemented.');
  }
  public editEmployee(employee: Employee) {
    throw new Error('Method not implemented.');
  }

  public getEmployees(): Observable<Employee[]> {
    return of([
      {
        id: 1,
        name: 'Sai',
        email: 'sai@gmail.com',
        contactNumber: '912232122',
        devices: 2,
      },
    ]);
  }
}
