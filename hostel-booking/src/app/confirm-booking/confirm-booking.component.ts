import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-confirm-booking',
  imports:[IonicModule,CommonModule,RouterModule],
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.scss'],
})
export class ConfirmBookingComponent  implements OnInit {

 

  ngOnInit() {}
  bookingDetails: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.bookingDetails = navigation?.extras.state?.['data'];
  }

}
