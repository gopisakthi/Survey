import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route:Router) { }
  public username:any;
  public password:any;
  public username_error:boolean=false;
  public password_error:boolean=false;

  ngOnInit(): void {
  }

  login()
  {
    this.username=document.getElementById('username');
    this.password=document.getElementById('password');
    alert(this.username.value);
    alert(this.password.value);
    if(this.username.value =='gopi_act@yahoo.com' && this.password.value =='1234')
    {
      //console.log('Correct');
      this.route.navigate(['/survey']);
      // return;
    }
    else
    {
      if(this.username.value!='gopi_act@yahoo.com')
      {
        alert('Please enter correct username');
        this.username_error=true;
        this.password_error=false;
      }
      else if(this.password.value!='1234')
      {
        alert('Please enter correct Password');
        this.password_error=true;
        this.username_error=false;
      }
    }
  }
}
