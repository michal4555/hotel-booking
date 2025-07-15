import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReservationService } from './services/reservation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  list = signal<any[]>([]);
  constructor(private roomSer: ReservationService) {

  }
  protected readonly title = signal('hotel-booking');

  but() {
    this.roomSer.getAllRooms()
      .subscribe(x => {
        this.list.set( x);
        console.log(x, this.list)
      })
  }
}
