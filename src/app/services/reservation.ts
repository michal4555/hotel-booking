import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'https://localhost:7019/api/hotel';

  constructor(private http: HttpClient) {}

  getAllRooms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/rooms`);
  }

  getAvailableRooms(start: string, end: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/available?start=${start}&end=${end}`);
  }

  reserveRoom(reservation: {
    roomId: number;
    startDate: string;
    endDate: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/reserve`, reservation);
  }

  getAllReservations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reservations`);
  }
}
