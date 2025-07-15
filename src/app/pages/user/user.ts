import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';       
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
startDate: string = '';
endDate: string = '';
availableRooms: any[] = [];

searchRooms() {
  console.log('Searching for rooms between:', this.startDate, this.endDate);
  // כאן תשלפי בעתיד נתונים מה-API
  this.availableRooms = [
    { id: 1, number: 101, type: 'רגיל' },
    { id: 2, number: 202, type: 'סוויטה' }
  ];
}

reserveRoom(roomId: number) {
  console.log('Reserving room:', roomId);
  // שליחת בקשת הזמנה לשרת
}

}
