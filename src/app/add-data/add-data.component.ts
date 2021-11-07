import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employees } from '../Data';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent implements OnInit {
  @Output() onAddData: EventEmitter<Employees> = new EventEmitter();

  name!: string;
  age!: number;
  gender!: string;
  department!: string;
  salary!: number;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const newData = {
      name: this.name,
      age: this.age,
      gender: this.gender,
      department: this.department,
      salary: this.salary,
    };

    this.onAddData.emit(newData);

    this.name = '';
    this.age = 0;
    this.gender = '';
    this.department = '';
    this.salary = 0;
  }
}
