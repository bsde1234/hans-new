import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgxNotificationService } from 'ngx-notification';


declare var Razorpay: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 Advertise:Boolean;
 loggedIn='false';
 clickToggle=false;
 isLogin='false';
 callbackDetails:any;
 events: string[] = [];
  opened: boolean;

  // tslint:disable-next-line: max-line-length
  constructor(public router:Router,private ngxNotificationService :NgxNotificationService,  private auth : AuthService, private _formBuilder: FormBuilder ) {

  }
  register() {
this.router.navigateByUrl('register');
  }
  onboarding() {
    this.router.navigateByUrl('chat');
      }
  ngOnInit() {
    document.getElementById('backBtn').style.display = 'none';     

    if(localStorage.getItem('loggedIn'))
    this.loggedIn = localStorage.getItem('loggedIn');

    if(this.loggedIn =='true')
    {
      this.router.navigateByUrl('dashboard');
    }   
    if (window.screen.width > 768) {
      this.Advertise = true;
    } else {
      this.Advertise = false;
    } 
  }

  callBack(phone) {
     console.log(name);
    this.callbackDetails = {
      'phone':phone.value,
    };
    this.auth.callback(this.callbackDetails).subscribe(res => {
      console.log(res);
      this.ngxNotificationService.sendMessage('Thank you for showing your interest, We will call you right back!', 'danger', 'top-right');

    });
  }

  subscription() {
    this.router.navigateByUrl('/subscription');
  }
  myFunction() {
    this.clickToggle = true;
   }

}
