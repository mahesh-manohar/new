import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  username ='';
  email ='';
  contactno ='';
  password ='';
 
  constructor(private router : Router) { }
 
  ngOnInit() {
    
  }
 
  handlesignin(){
    this.router.navigate(['']);
  }
 
}
