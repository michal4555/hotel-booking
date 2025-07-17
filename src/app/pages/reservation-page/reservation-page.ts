
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomService, Room } from '../../services/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-page',
  standalone: true,
  templateUrl: './reservation-page.html',
  styleUrls: ['./reservation-page.scss'],
  imports: [CommonModule, FormsModule]
})
export class ReservationPageComponent implements OnInit {
onDateChange() {
throw new Error('Method not implemented.');
}
  reservation = {
    customerName: '',
    phone: '',
    // RoomId: null as number | null,
    StartDate: '',
    EndDate: ''
  };

  rooms: Room[] = [];

  constructor(
    private roomService: RoomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    this.reservation.StartDate = today.toISOString().split('T')[0];
    this.reservation.EndDate = tomorrow.toISOString().split('T')[0];

    this.loadRooms();
  }

  loadRooms() {
    this.roomService.getAvailableRooms(this.reservation.StartDate, this.reservation.EndDate).subscribe({
      next: (data: Room[]) => {
        this.rooms = data;
      },
      error: (err) => {
        console.error('שגיאה בטעינת החדרים', err);
        alert('אירעה שגיאה בטעינת החדרים הזמינים.');
      }
    });
  }

  onDateChange1() {
    // טוען מחדש את החדרים לפי התאריכים החדשים
    this.loadRooms();
  }

  submitReservation() {
    if (
      !this.reservation.customerName ||
      !this.reservation.phone ||
      // !this.reservation.RoomId ||
      !this.reservation.StartDate ||
      !this.reservation.EndDate
    ) {
      alert('נא למלא את כל השדות');
      return;
    }

    const request = {
      // roomId: this.reservation.RoomId,
      startDate: this.reservation.StartDate,
      endDate: this.reservation.EndDate,
      customerName: this.reservation.customerName,
      phone: this.reservation.phone
    };

    this.roomService.reserveRoom(request).subscribe({
      next: () => {
        alert('ההזמנה נשלחה בהצלחה!');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error(err);
        alert('אירעה שגיאה בעת ההזמנה.');
      }
    });
  }
}
