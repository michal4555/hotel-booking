
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export interface Room {
// name: any;
//   id: number;
//   number: number;
//   type: string;
//   status: 'פנוי' | 'תפוס';
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class RoomService {
//   getAllRooms() {
//     throw new Error('Method not implemented.');
//   }
//   private baseUrl = 'https://localhost:7019/api';

//   constructor(private http: HttpClient) {}

//   getAvailableRooms(startDate: string, endDate: string): Observable<Room[]> {
//     return this.http.get<any[]>(`${this.baseUrl}/RoomAvailability/available?startDate=${startDate}&endDate=${endDate}`);
//   }

//   // reserveRoom(roomId: number, startDate: string, endDate: string): Observable<any> {
//   //   const reservation = {
//   //     roomId,
//   //     startDate,
//   //     endDate
//   //   };
//   //   return this.http.post(`${this.baseUrl}/RoomAvailability/reserve`, reservation);
//   // }
//   reserveRoom(reservationRequest: {
//   roomId: number;
//   startDate: string;
//   endDate: string;
//   customerName: string;
// }) {
//   return this.http.post('https://localhost:7019/api/RoomAvailability/reserve', reservationRequest);
// }

// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Room {
  id: number;
  number: number;
  name: string;
  type: string;
  status: 'פנוי' | 'תפוס';
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  // getAllRooms() {
  //   throw new Error('Method not implemented.');
  // }
  getAllRooms(): Observable<Room[]> {
  return this.http.get<Room[]>(`${this.baseUrl}/RoomAvailability/all`);
}

  private baseUrl = 'https://localhost:7019/api';

  constructor(private http: HttpClient) {}

  getAvailableRooms(startDate: string, endDate: string): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}/RoomAvailability/available?startDate=${startDate}&endDate=${endDate}`);
  }

  reserveRoom(reservationRequest: {

    startDate: string;
    endDate: string;
    customerName: string;
    phone: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/RoomAvailability/reserve`, reservationRequest);
  }
}
