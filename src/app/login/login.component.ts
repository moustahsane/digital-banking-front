import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!:FormGroup
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { 
  }

  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username:this.fb.control(""),
      password:this.fb.control("")
    })

  }
  handleSubmit(){
   let username=this.formLogin.value.username
   let password=this.formLogin.value.password
    this.authService.login(username,password).subscribe(
   {   next:data=>{
    console.log("Login successful",data);
    this.authService.loadProfile(data);
    this.router.navigateByUrl("/admin")
      },
      error:err=>{
    console.error("Error : ",err);
        
      }
      }
    )
  }
}
