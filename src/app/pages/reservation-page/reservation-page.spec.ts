import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPageComponent } from './reservation-page';

describe('ReservationPage', () => {
  let component: ReservationPageComponent;
  let fixture: ComponentFixture<ReservationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
