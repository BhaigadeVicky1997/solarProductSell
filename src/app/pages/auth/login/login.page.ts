import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, NavController, AlertController } from '@ionic/angular';

//Local Imports
import { CommonutiltyService } from '../../../shared/commonutilty.service';

//firebase import 
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   //Variable Declaration's
   email;
   pass;
   username;
   constructor(
     public AlertController: AlertController,
     public NavController: NavController,
     public Router: Router,
     public ToastController: ToastController,
     public CommonUtilitiesService: CommonutiltyService
   ) { }
 
   ngOnInit() {
   }
 
   
   login() {
     if (this.email == undefined || this.pass == undefined) {
       this.CommonUtilitiesService.presentAlert('Please fill all fields.')
     }
     else {
      firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
         .then(res => {
          localStorage.setItem('username',this.username); 
          localStorage.setItem('email',this.email);
          console.log(res);
           this.CommonUtilitiesService.presentAlert('Login Success!');
           this.username = '';
           this.email = '';
           this.pass = '';
           setTimeout(() => {
             this.Router.navigate(['/home']);
           }, 2000)
         })
         .catch(err => {
           console.log(err.message);
           this.CommonUtilitiesService.presentAlert(err.message);
         })
     }
   }

}
