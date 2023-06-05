import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUser } from '../models/getUser';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  declare draw : any;
  user : GetUser
  uuid : string
  constructor(private cardService: CardService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params => {
      if(params["uuid"]){
        this.uuid = (params["uuid"]);
        console.log(this.uuid)
      }
    }))

    this.cardService.getUserDetails(this.uuid).subscribe(res => {
      this.user = res;
      console.log(this.user)
    })
  }
}
