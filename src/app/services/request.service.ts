import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getRequest(params: any) {
    return new Promise((resolve, reject) => {
      this.http.get<any>(environment.apiUrl + params.url).
        subscribe((data: any) => {
          resolve(data);
        }, error => {
          reject(error);
        })
    });
  };

  // Send POST Request
  postRequest(params: any) {
    return new Promise((resolve, reject) => {
      this.http.post<any>(environment.apiUrl + params.url, params.req)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  };

}
