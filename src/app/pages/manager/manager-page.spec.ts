import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPageComponent } from './manager-page';

describe('ManagerPage', () => {
  let component: ManagerPageComponent;
  let fixture: ComponentFixture<ManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
