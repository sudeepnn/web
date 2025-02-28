import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private router: Router) {}
  hotels = [
    {
      name: 'Grand Palace Hotel',
      location: 'Mumbai, India',
      image: 'assets/images/hotel1.jpg',
      checkIn: '9:00 AM',
      checkOut: '9:00 AM Next day',
      selectedRoom: null,
      rooms: [
        { type: 'Deluxe Room', price: 5000 },
        { type: 'Suite', price: 8000 },
        { type: 'Presidential Suite', price: 15000 },
      ],
    },
    {
      name: 'Ocean View Resort',
      location: 'Goa, India',
      image: 'assets/images/hotel2.jpg',
      checkIn: '9:00 AM',
      checkOut: '9:00 AM next day',
      selectedRoom: null,
      rooms: [
        { type: 'Standard Room', price: 3000 },
        { type: 'Beachfront Villa', price: 10000 },
      ],
    },
  ];

  bookHotel(hotel: any) {
    if (!hotel.checkIn || !hotel.checkOut || !hotel.selectedRoom) {
      alert('Please select check-in, check-out dates and a room type.');
      return;
    }

    // Navigate to booking confirmation with state data
    this.router.navigate(['/booking'], { state: { data: { hotel, ...hotel } } });
  
  }
}
