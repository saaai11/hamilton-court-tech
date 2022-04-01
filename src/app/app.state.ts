import { Device } from './store/devices/device.model';
import { deviceReducer } from './store/devices/device.reducer';
import { Employee } from './store/employee.model';
import { employeeReducer } from './store/employee/employee.reducer';

export interface AppState {
  employee: Employee;
  device: Device;
}

export const appReducer = {
  employee: employeeReducer,
  device: deviceReducer,
};
