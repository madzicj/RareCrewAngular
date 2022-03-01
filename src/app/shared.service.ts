import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "https://localhost:7236/api";

  constructor(private http:HttpClient) { }

  getEmployees():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/employee')
  }
}
