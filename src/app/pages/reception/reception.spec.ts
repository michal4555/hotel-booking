import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionComponent } from './reception.Component';

describe('Reception', () => {
  let component: ReceptionComponent;
  let fixture: ComponentFixture<ReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
