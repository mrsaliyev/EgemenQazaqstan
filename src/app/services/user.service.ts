import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user';


@Injectable()
export class UserService {
  api = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) {}

  getUserByLogin(login: string): Observable<User> {
    return this.http.get<User>(this.api + `/users?login=${login}`);
  }


  hasLogin(login: string): Observable<any> {
    return this.http.get<Response>(this.api + `/users?login=${login}`);
  }




}
