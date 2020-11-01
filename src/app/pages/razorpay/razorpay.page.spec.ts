import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RazorpayPage } from './razorpay.page';

describe('RazorpayPage', () => {
  let component: RazorpayPage;
  let fixture: ComponentFixture<RazorpayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazorpayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RazorpayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
