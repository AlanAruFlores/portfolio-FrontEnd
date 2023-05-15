import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSoftComponent } from './crear-soft.component';

describe('CrearSoftComponent', () => {
  let component: CrearSoftComponent;
  let fixture: ComponentFixture<CrearSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
