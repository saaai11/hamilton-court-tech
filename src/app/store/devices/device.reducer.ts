import { createReducer, on } from '@ngrx/store';
import { addDevice, loadDevices, loadDevicesSuccess } from './device.action';
import { Device, Devices } from './device.model';

export const initialState: Devices = {
  devices: [],
};

export const deviceReducer = createReducer(
  initialState,
  on(addDevice, (state, action) => {
    let device = { ...action.device };
    device.id = state.devices.length + 1;

    return {
      ...state,
      devices: [...state.devices, device],
    };
  }),

  on(loadDevices, (state, action) => {
    return {
      ...state,
    };
  }),
  on(loadDevicesSuccess, (state, action) => {
    return {
      ...state,
      devices: action.devices,
    };
  })
  // on(loadEmployeesFailure, (state, action) => {
  //   return {
  //     ...state,
  //     error: action.error,
  //   };
  // })
);
