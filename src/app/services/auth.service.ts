import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserResponse } from '../models/userResponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
  ) { }

  getUser(user:User):Observable<UserResponse>{
    return this.http.post<UserResponse>("https://localhost:44387/api/user/login",user)
  }

  logout(userMail:string):Observable<boolean>{
    return this.http.post<boolean>("https://localhost:44387/api/user/logout",{UserMail:userMail})
  }
}
