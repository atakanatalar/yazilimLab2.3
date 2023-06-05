import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService , private httpClient:HttpClient) { }

  _userMail = localStorage.getItem("userMail")
  

  ngOnInit(): void {

  }

  logOut(){

    if(this._userMail)
    this.authService.logout(this._userMail).subscribe((res => {
      
    }))
    localStorage.clear()
  }

}
