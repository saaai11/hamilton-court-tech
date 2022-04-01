import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { Device } from 'src/app/store/devices/device.model';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss'],
})
export class EditDeviceComponent implements OnInit {
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
    @Inject(MAT_DIALOG_DATA) public data: Device,
    private dialogRef: MatDialogRef<EditDeviceComponent>,
    private dataService: DataService
  ) {}

  edit() {
    this.device.id = this.data.id;

    this.device.type = this.addEmployeeForm.value.type;
    this.device.description = this.addEmployeeForm.value.description;
    this.device.empIds = this.addEmployeeForm.value.empId;
    this.dataService.editDevice(this.device);
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.addEmployeeForm.setValue({
      type: this.data.type,
      description: this.data.description,
      empId: this.data.empIds,
    });
  }
}
