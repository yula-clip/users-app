import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  private url = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User>(this.url)
      .pipe(
        map((data: any) => data.data)
      );
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(this.url, { params: this.getParams(id) })
      .pipe(
        map(data => data.data)
      );
  }

  createUser(user: User) {
    return this.http.post(this.url, user);
  }

  updateUser(user: User) {
    return this.http.put(this.url, user, { params: this.getParams(user.id) });
  }

  deleteUser(id: number) {
    return this.http.delete(this.url, { params:  this.getParams(id) });
  }

  private getParams(id: number) {
    return new HttpParams().set('id', id.toString());
  }
}
