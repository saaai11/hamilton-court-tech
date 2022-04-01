import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SearchResultsSheetComponent } from '../search-results-sheet/search-results-sheet.component';
import { DataService } from 'src/app/services/data.service';
import { AddDeviceComponent } from '../add-device/add-device.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  array: any[] = [];

  constructor(
    private dialog: MatDialog,
    private bottomSheet: MatBottomSheet,
    private dataService: DataService
  ) {}

  ngOnInit(): void {}

  searchData(event: any): void {
    this.array = [];
    let query: string = event.target.value;
    let matchSpaces: any = query.match(/\s*/);
    if (matchSpaces[0] === query) {
      this.array = [];
      return;
    }
    this.dataService.searchItems(query).subscribe((data) => {
      data.forEach((value) => {
        this.array.push(value);
      });
    });
  }

  addDevice() {
    this.dialog.open(AddDeviceComponent, {
      width: '80vw',
    });
  }
  addEmployee() {
    this.dialog.open(AddEmployeeComponent, {
      width: '80vw',
    });
  }
}
