
// import { Component, signal } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// interface Room {
//   id: number;
//   type: string;
//   status: 'פנוי' | 'תפוס';
// }

// @Component({
//   selector: 'app-reception',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './reception.html',
//   styleUrls: ['./reception.scss'],
// })
// export class ReceptionComponent {
//   rooms = signal<Room[]>([
//     { id: 101, type: 'סוויטה', status: 'פנוי' },
//     { id: 102, type: 'רגיל', status: 'תפוס' },
//   ]);

//   roomToEdit = signal<Room | null>(null);

//   addRoom() {
//     const newId = this.rooms().length
//       ? Math.max(...this.rooms().map(r => r.id)) + 1
//       : 101;
//     const newRoom: Room = { id: newId, type: 'חדש', status: 'פנוי' };
//     this.rooms.update(rooms => [...rooms, newRoom]);
//   }

//   deleteRoom(id: number) {
//     this.rooms.update(rooms => rooms.filter(room => room.id !== id));
//   }

//   startEditRoom(room: Room) {
//     this.roomToEdit.set({ ...room });
//   }

//   saveEdit() {
//     const edited = this.roomToEdit();
//     if (!edited) return;
//     this.rooms.update(rooms =>
//       rooms.map(room => (room.id === edited.id ? edited : room))
//     );
//     this.roomToEdit.set(null);
//   }

//   cancelEdit() {
//     this.roomToEdit.set(null);
//   }
// }
import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../services/room'; // הוסף את השירות

interface Room {
  id: number;
  type: string;
  status: 'פנוי' | 'תפוס';
}

@Component({
  selector: 'app-reception',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reception.html',
  styleUrls: ['./reception.scss'],
})
export class ReceptionComponent implements OnInit {
  private roomService = inject(RoomService);

  rooms = signal<Room[]>([]);
  roomToEdit = signal<Room | null>(null);

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe({
      next: (data) => {
        this.rooms.set(data);
      },
      error: (err) => {
        console.error('שגיאה בקבלת חדרים מהשרת:', err);
      }
    });
  }

  addRoom() {
    const newId = this.rooms().length
      ? Math.max(...this.rooms().map(r => r.id)) + 1
      : 101;
    const newRoom: Room = { id: newId, type: 'חדש', status: 'פנוי' };
    this.rooms.update(rooms => [...rooms, newRoom]);
  }

  deleteRoom(id: number) {
    this.rooms.update(rooms => rooms.filter(room => room.id !== id));
  }

  startEditRoom(room: Room) {
    this.roomToEdit.set({ ...room });
  }

  saveEdit() {
    const edited = this.roomToEdit();
    if (!edited) return;
    this.rooms.update(rooms =>
      rooms.map(room => (room.id === edited.id ? edited : room))
    );
    this.roomToEdit.set(null);
  }

  cancelEdit() {
    this.roomToEdit.set(null);
  }
}
