import { Observable } from 'rxjs';
import { Employee } from '../store/employee.model';

export abstract class AbstractDataService {
  public abstract getEmployees(): Observable<Employee[]>;
  public abstract addEmployee(employee: Employee): any;
  public abstract editEmployee(employee: Employee): any;
}
