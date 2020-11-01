import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RazorpayPage } from './razorpay.page';

const routes: Routes = [
  {
    path: '',
    component: RazorpayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RazorpayPageRoutingModule {}
