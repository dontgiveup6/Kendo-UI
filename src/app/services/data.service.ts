import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../Data';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // set a property to the api url
  private apiUrl = 'http://localhost:5000/data';

  constructor(private http: HttpClient) {}

  // A method to get the data from the fake api which will return an observable
  getEmployees(): Observable<Employees[]> {
    // Get Method
    return this.http.get<Employees[]>(this.apiUrl);
  }

  deleteEmployee(dataItem: Employees): Observable<Employees> {
    const url = `${this.apiUrl}/${dataItem.id}`;
    return this.http.delete<Employees>(url);
  }

  addData(dataItem: Employees): Observable<Employees> {
    return this.http.post<Employees>(this.apiUrl, dataItem, httpOptions);
  }
}
