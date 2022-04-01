import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Device, Devices } from './device.model';

export const deviceState = createFeatureSelector<Devices>('device');

export const getDevice = createSelector(deviceState, (state) => {
  return state.devices;
});
