import { Injectable } from '@angular/core';
import { RequestService } from '../requestService/request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;

  constructor(private requestService: RequestService) { }

  getUser() {
    return this.requestService.getRequest({ url: 'user' }, true)
      .then((resp: any) => {
        this.user = {
          id: resp.id,
          name: resp.name,
          email: resp.email
        };
        return this.user;
      })
      .catch(() => {
        return false;
      });
  }

  login(email: string, password: string) {
    let params = {
      url: 'login',
      req: {
        email: email,
        password: password
      }
    };
    return this.requestService.postRequest(params).then((res: any) => {
      this.requestService.token = res.token;
      localStorage.setItem('token', res.token);
      location.reload();
      return true;
    }, (error: any) => {
      console.error('An error occurred:', error);
      return false;
    });
  }

  register(name: string, email: string, password: string) {
    let params = {
      url: 'register',
      req: {
        name: name,
        email: email,
        password: password
      }
    };
    return this.requestService.postRequest(params).then(() => {
      return true;
    }, (error: any) => {
      console.error('An error occurred:', error);
      return false;
    });
  }

  logout() {
    this.requestService.postRequest({ url: 'logout' }, true).then(() => {
      localStorage.removeItem('token');
      location.reload();
    })
  }
}
