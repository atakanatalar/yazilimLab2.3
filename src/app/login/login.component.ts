import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  faultText? : string;
  block : boolean = false;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router) { 

  }

  ngOnInit(): void {
    this.createLoginForm()
    let loginFault = "0"
    localStorage.setItem("loginFault",loginFault)
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }

  login(){
    let loginModel = Object.assign({},this.loginForm.value)
    if(loginModel.email == "admin@admin.com" && loginModel.password == "admin"){
      this.router.navigate(["/admin"])
    }
  }
  
  /*
  login(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.getUser(loginModel).subscribe((response) =>{
        if(response.userId != null && !this.block){
          this.router.navigate(["/"]).then(() => {
            window.location.reload();
            localStorage.setItem("userId",response.userId);
            localStorage.setItem("userMail",response.userMail);
          })
        }else{
          let fault = localStorage.getItem("loginFault");
          let faultNum = Number(fault) + 1
          if(faultNum<3){
            this.faultText ="Hatalı parola "+ (3-faultNum).toString() + " hakkınız kaldı";
          }else{
            this.block = true
            this.faultText = "Hakkınız kalmadı"
          }
          
          localStorage.setItem("loginFault",faultNum.toString())
        }
      })
    }
  }
*/
  

}
