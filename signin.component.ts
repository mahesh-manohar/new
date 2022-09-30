import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 
  username ='';
  password ='';
  errorMessage = 'Invalid credentials, Please Login again!!!';
  invalidlogin = false;
 
  constructor(private router : Router) { }
 
  ngOnInit() {
  }
 
  handlesignin(){
    
    if(this.username ==='mahesh' && this.password ==='mahesh123@'){
      this.router.navigate(['welcome',this.username]);
      this.invalidlogin =false;
    }
    else{
      this.invalidlogin =true ;
 
    }
 
  }
 
  handlesignup(){
    this.router.navigate(['signup']);
  }
 
}
