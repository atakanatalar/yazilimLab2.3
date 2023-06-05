import { Component, OnInit } from '@angular/core';
import { GetUser } from 'src/app/models/getUser';
import { CardService } from 'src/app/services/card.service';

declare const L: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  allUsers : GetUser[] 
  filterTextByName : string
  constructor(private cardService: CardService) {};
  
  ngOnInit(): void {
    this.cardService.getUser().subscribe(res => {
      this.allUsers = res;
      console.log(this.allUsers)
    })
   
  }

 
  
}
