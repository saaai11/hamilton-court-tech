import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { DataService } from 'src/app/services/data.service';
import { loadDevices } from 'src/app/store/devices/device.action';
import { Device } from 'src/app/store/devices/device.model';
import { EditDeviceComponent } from '../edit-device/edit-device.component';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss'],
})
export class DevicesListComponent implements OnInit {
  @Input()
  devices$!: Observable<Device[]>;

  constructor(private dialog: MatDialog, private store: Store<AppState>) {}

  submit() {}

  editDevice(device: Device) {
    this.dialog
      .open(EditDeviceComponent, {
        data: device,
        width: '80vw',
      })
      .afterClosed()
      .subscribe(() => {
        this.store.dispatch(loadDevices());
      });
  }

  ngOnInit(): void {}
}
