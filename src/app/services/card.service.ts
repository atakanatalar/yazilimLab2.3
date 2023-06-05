import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddUser } from '../models/addUser';
import { Card } from '../models/card';
import { GetUser } from '../models/getUser';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  
  constructor(
    @Inject('apiUrl') private apiUrl : string,
    private http : HttpClient
  ) { }

  getCards() : Observable<Card[]>{
    return this.http.get<Card[]>(this.apiUrl+ '/cards')
  }

  addUser(addUser:AddUser){
    return this.http.post("https://localhost:44309/api/Arastirmaci",addUser)
  }

  getUser() : Observable<GetUser[]>{
    return this.http.get<GetUser[]>("https://localhost:44309/api/Arastirmaci/getall")
  }

  getUserDetails(uuid:string) : Observable<GetUser>{
    return this.http.get<GetUser>("https://localhost:44309/api/Arastirmaci/getbyid?uuid="+uuid)
  }
/*
  addCard(card:Card){
    return this.http.post<Card[]>(this.apiUrl+'/cards',card)
  }

  getCars() : Observable<Car[]>{
    let userId = localStorage.getItem("userId")
    return this.http.get<Car[]>("https://localhost:44387/api/car/getcars?userId="+userId)
  }

  getCarsByDate(startDate : string , endDate : string, carId : string) : Observable<Car[]>{
    let userId = localStorage.getItem("userId")
    return this.http.get<Car[]>("https://localhost:44387/api/car/getcarsbydate?StartDate="+
    startDate+"&EndDate="+endDate+"&id="+carId+"&userId="+userId)
  }

  getUsersCars() : Observable<UsersCars[]>{
    let userId = localStorage.getItem("userId")
    return this.http.get<UsersCars[]>("https://localhost:44387/api/car/getuserscars?userId="+userId)
  }
*/
}
