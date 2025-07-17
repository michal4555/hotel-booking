
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoomService, Room } from '../../services/room';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './user.html',
  styleUrls: ['./user.scss']
})
export class User {
  startDate: string = '';
  endDate: string = '';
  customerName: string = '';
  phone: string = '';
  availableRooms: Room[] = [];
  selectedRoomId: any;

  constructor(private roomService: RoomService, private router: Router) {}

  searchRooms() {
    this.roomService.getAvailableRooms(this.startDate, this.endDate).subscribe({
      next: (rooms: Room[]) => this.availableRooms = rooms,
      error: (err: any) => {
        console.error('שגיאה בשליפת חדרים:', err);
        alert('שגיאה בשליפת חדרים זמינים');
      }
    });
  }

  reserveRoom(roomId: number) {
    if (!this.startDate || !this.endDate) {
      alert('יש לבחור טווח תאריכים לפני ביצוע הזמנה');
      return;
    }

    const reservationRequest = {
      roomId: roomId,
      startDate: this.startDate,
      endDate: this.endDate,
      customerName: this.customerName,
      phone: this.phone
    };

    // ניווט לדף reservation-page עם הנתונים
    this.router.navigate(['/reservation-page'], { state: { reservation: reservationRequest } });
  }
}
