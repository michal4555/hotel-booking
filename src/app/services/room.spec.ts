// import { TestBed } from '@angular/core/testing';

// import { Room } from './room';

// describe('Room', () => {
//   let service: Room;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(Room);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
import { Room } from './room';

describe('Room interface', () => {
  it('should allow creating a Room object', () => {
    const room: Room = {
      name: 'Room A',
      id: 1,
      number: 101,
      type: 'סוויטה',
      status: 'פנוי'
    };

    expect(room).toBeTruthy();
    expect(room.name).toBe('Room A');
  });
});
