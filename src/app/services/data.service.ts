import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, forkJoin, map, Observable, of } from 'rxjs';
import { Device } from '../store/devices/device.model';
import { Employee } from '../store/employee.model';
import { AbstractDataService } from './data.abstract.service';

@Injectable({
  providedIn: 'root',
})
export class DataService implements AbstractDataService {
  constructor(private httpClient: HttpClient) {}

  url: string = 'http://localhost:3000/employees';
  deviceUrl: string = 'http://localhost:3000/devices';

  public getEmployees(): Observable<Employee[]> {
    return this.httpClient
      .get<Employee[]>(this.url, {
        headers: { Accept: 'application/json' },
        params: {},
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public getEmployee(id: number): Observable<Employee> {
    let empUrl = `${this.url}/${id}`;
    return this.httpClient
      .get<Employee>(empUrl, {
        headers: { Accept: 'application/json' },
        params: {},
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public getDevice(id: number): Observable<Device> {
    let devUrl = `${this.deviceUrl}/${id}`;
    return this.httpClient
      .get<Device>(devUrl, {
        headers: { Accept: 'application/json' },
        params: {},
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public getDevices(): Observable<Device[]> {
    return this.httpClient
      .get<Device[]>(this.deviceUrl, {
        headers: { Accept: 'application/json' },
        params: {},
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public addEmployee(employee: Employee) {
    return this.httpClient
      .post<any>(this.url, employee)
      .pipe(map((response) => response));
  }

  public editEmployee(employee: Employee) {
    return this.httpClient
      .patch<any>(`${this.url}/${employee.id}`, employee)
      .pipe(map((response) => response));
  }

  public addDevice(device: Device) {
    return this.httpClient
      .post<Device>(this.deviceUrl, device)
      .pipe(map((response) => response));
  }

  public editDevice(device: Device) {
    console.log(device, `${this.deviceUrl}/${device.id}`, 'ljhjkjk');

    return this.httpClient
      .patch<any>(`${this.deviceUrl}/${device.id}`, device)
      .pipe(map((response) => response));
  }

  public searchItems(query: string) {
    let array: any[] = [];

    return forkJoin(this.getDevices(), this.getEmployees()).pipe(
      map(([devices, employees]: [Device[], Employee[]]) => {
        let device = devices.filter((device: Device) => {
          const regex = new RegExp(query, 'gi');
          return device.type.match(regex);
        });

        let employee = employees.filter((employee: Employee) => {
          const regex = new RegExp(query, 'gi');
          return employee.name.match(regex);
        });

        array.push(...device);
        array.push(...employee);

        return array;
      })
    );
  }
}
