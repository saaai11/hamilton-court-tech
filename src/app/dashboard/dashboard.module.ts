import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';
import { MockDataService } from '../services/mock-data.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { SearchResultsSheetComponent } from './search-results-sheet/search-results-sheet.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { DeviceComponent } from './device/device.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    NavigationBarComponent,
    DevicesListComponent,
    SearchResultsSheetComponent,
    EditEmployeeComponent,
    EmployeeComponent,
    AddDeviceComponent,
    EditDeviceComponent,
    DeviceComponent,
  ],
  entryComponents: [AddEmployeeComponent],

  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatBottomSheetModule,
  ],
  providers: [
    {
      provide: DataService,
      useClass: environment.useMock ? MockDataService : DataService,
    },
  ],
})
export class DashboardModule {}
