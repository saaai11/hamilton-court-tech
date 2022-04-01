import { createAction, props } from '@ngrx/store';
import { Device } from './device.model';

export const addDevice = createAction(
  '[Device] Add Device',
  props<{ device: Device }>()
);

export const addDeviceSuccess = createAction('[Device] Add Device Success');

export const loadDevices = createAction('[Device] Load Device');

export const loadDevicesSuccess = createAction(
  '[Device] Load Devices Success',
  props<{ devices: Device[] }>()
);

export const loadEDeviceFailure = createAction(
  '[Device] Load Device Failure',
  props<{ error: string }>()
);

export const updateDevice = createAction(
  '[Device] Update Device',
  props<{ device: Device }>()
);
