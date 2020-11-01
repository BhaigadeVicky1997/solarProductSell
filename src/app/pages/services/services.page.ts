import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { CommonutiltyService } from 'src/app/shared/commonutilty.service';
import { NavController } from '@ionic/angular';
//Local Imports

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {


  //variable declarations
  service = [];
  //paymenyAmount: number;
  currency: string = 'INR';
  currencyIcon: string = '';
  razor_key = 'rzp_test_uj6E8KVKnS3sj5';

  constructor(
    public co: CommonutiltyService,
    public NavController:NavController,
    public Router: Router) { }

  ngOnInit() {
    this.getAllServices();
  }


  getAllServices() {
    firebase.firestore().collection("services").get()
      .then(doc => {
        doc.forEach((docsData) => {
          this.service.push(docsData)
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  logOut() {
    firebase.auth().signOut();
    this.co.presentLoading('You Have Been Logged Out!');
    this.NavController.navigateBack('/login');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
  }

  payWithRazor(price) {
    let options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency, // your 3 letter currency code
      key: this.razor_key, // your Key Id from Razorpay dashboard
      amount: price, // Payment amount in smallest denomiation e.g. celocants for USD
      name: localStorage.getItem('username'),
      prefill: {
        email: localStorage.getItem('email'),
        contact: '',
        name: localStorage.getItem('username')
      },
      theme: {
        color: '#F35E5D'
      },
      modal: {
        ondismiss: () => {
          this.co.presentAlert('dismissed')
        }
      }
    };

    let successCallback = (payment_id) => {
      this.co.presentLoading('Order placed ' + payment_id)
      this.Router.navigate(['/home']);
    };

    let cancelCallback = (error) => {
      this.co.presentLoading(error.description + ' (Error ' + error.code + ')');
      this.Router.navigate(['/services']);
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

}
