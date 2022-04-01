import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { addDevice } from 'src/app/store/devices/device.action';
import { Device } from 'src/app/store/devices/device.model';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss'],
})
export class AddDeviceComponent implements OnInit {
  addEmployeeForm: FormGroup = this.formBuilder.group({
    type: [''],
    description: [''],
    empId: [''],
  });
  device: Device = {
    id: 0,
    type: '',
    description: '',
    empIds: 0,
  };
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddDeviceComponent>,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}
  add() {
    this.device.type = this.addEmployeeForm.value.type;
    this.device.description = this.addEmployeeForm.value.description;
    this.device.empIds = this.addEmployeeForm.value.empId;
    this.store.dispatch(addDevice({ device: this.device }));
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
}
