import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  declare draw : any;
  loginForm!: FormGroup;
  faultText? : string;
  block : boolean = false;
  constructor(private formBuilder:FormBuilder,private cardService:CardService,private router:Router) { 

  }

  ngOnInit(): void {
    this.createLoginForm()
    let loginFault = "0"
    localStorage.setItem("loginFault",loginFault)
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      isim:["",Validators.required],
      soyisim:["",Validators.required],
      baslik:["",Validators.required],
      yil:["",Validators.required],
      yayinyeri:["",Validators.required],
      tur:["",Validators.required],
    })
  }

  addUser(){
    console.log(this.loginForm.value)
    this.cardService.addUser(this.loginForm.value).subscribe(res => {
      console.log(res);
    });
  }

}
