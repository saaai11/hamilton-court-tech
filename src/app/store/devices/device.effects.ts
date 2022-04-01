import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import {
  addDevice,
  addDeviceSuccess,
  loadDevices,
  loadDevicesSuccess,
} from './device.action';

@Injectable()
export class DeviceEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  addDevice$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addDevice),
      switchMap((action) => this.dataService.addDevice(action.device)),
      map((response) => {
        return addDeviceSuccess();
      })
    );
  });

  loadDevices$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDevices),
      switchMap(() => this.dataService.getDevices()),
      map((response) => {
        return loadDevicesSuccess({ devices: response });
      })
    );
  });
}
