import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardCardComponent } from './hard-card.component';

describe('HardCardComponent', () => {
  let component: HardCardComponent;
  let fixture: ComponentFixture<HardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
