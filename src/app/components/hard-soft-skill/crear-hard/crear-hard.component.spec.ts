import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHardComponent } from './crear-hard.component';

describe('CrearHardComponent', () => {
  let component: CrearHardComponent;
  let fixture: ComponentFixture<CrearHardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
