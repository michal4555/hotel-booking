
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReservationService } from './services/reservation';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, RouterLink, RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  list = signal<any[]>([]);
  protected readonly title = signal('hotel-booking');

  images = [
    'assets/20240411130700.389.jpg',
    'assets/FA7356C4-0C2F-263D-F39BA7BC1D9C547C.jpg',
    'assets/isrotel-eilat.jpg',
  ];
  currentImageIndex = 0;

  constructor(private roomSer: ReservationService) {}

  but() {
    this.roomSer.getAllRooms()
      .subscribe(x => {
        this.list.set(x);
        console.log(x, this.list);
      });
  }
}
