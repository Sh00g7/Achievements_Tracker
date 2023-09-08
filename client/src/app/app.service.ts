import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


  getAchievements() {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.get("http://127.0.0.1:5000/aa", {headers: headers})
  }
}
