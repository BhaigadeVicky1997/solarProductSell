import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-razorpay',
  templateUrl: './razorpay.page.html',
  styleUrls: ['./razorpay.page.scss'],
})
export class RazorpayPage implements OnInit {

  paymenyAmount: number;
  currency: string = 'INR';
  currencyIcon: string = '';
  razor_key = 'rzp_test_uj6E8KVKnS3sj5';

  constructor() { }

  ngOnInit() {
  }


  payWithRazor() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency, // your 3 letter currency code
      key: this.razor_key, // your Key Id from Razorpay dashboard
      amount: this.paymenyAmount, // Payment amount in smallest denomiation e.g. celocants for USD
      name: localStorage.getItem('username'),
      prefill: {
        email: localStorage.getItem('email'),
        contact: '',
        name: localStorage.getItem('username')
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

}
