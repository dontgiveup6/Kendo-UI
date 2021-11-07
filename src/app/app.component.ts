import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// Get DataService
import { DataService } from './services/data.service';
// Interface for employees
import { Employees } from './Data';

import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public checked = true;
  public checkadd = false;
  // init an empy array with type of the Interface Employees
  data: Employees[] = [];

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // subcribe to the method form DataService in order to constantly watch it
    this.dataService.getEmployees().subscribe((employees) => {
      this.data = employees;
    });
  }

  turn() {
    this.checkadd = !this.checkadd;
    console.log(this.checkadd);
  }

  public colorCode(id: number): SafeStyle {
    let result;

    if (id % 2 == 0) {
      result = 'red';
    } else {
      result = 'blue';
    }

    return this.sanitizer.bypassSecurityTrustStyle(result);
  }

  public colorDep(department: string): SafeStyle {
    let result;

    switch (department) {
      case 'Production':
        result = '#FD56FB';
        break;
      case 'Health':
        result = '#B2F699';
        break;
      case 'Accounting':
        result = '#FF6D4E';
        break;
      case 'Development':
        result = '#4EA3FF';
        break;
      default:
        result = 'transparent';
        break;
    }

    return this.sanitizer.bypassSecurityTrustStyle(result);
  }

  onDelete(dataItem: Employees) {
    this.dataService.deleteEmployee(dataItem).subscribe(() => {
      this.data = this.data.filter((d) => d.id !== dataItem.id);
    });
  }

  addData(dataItem: Employees) {
    this.checkadd = !this.checkadd;
    this.dataService.addData(dataItem).subscribe((data) => {
      this.data.push(data);
    });
  }
}
