import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  token: any;

  constructor(private http: HttpClient) { }

  getRequest(params: any, auth?: boolean) {
    const headers = auth ? new HttpHeaders({ 'Authorization': 'Bearer ' + this.token }) : new HttpHeaders();

    return new Promise((resolve, reject) => {
      this.http.get<any>('/api/' + params.url, { headers }).
        subscribe((data: any) => {
          resolve(data);
        }, error => {
          reject(error);
        })
    });
  };

  // Send POST Request
  postRequest(params: any, auth?: boolean) {
    const headers = auth ? new HttpHeaders({ 'Authorization': 'Bearer ' + this.token }) : new HttpHeaders();

    return new Promise((resolve, reject) => {
      this.http.post<any>('/api/' + params.url, params.req, { headers })
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  };

}
