import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEducacionComponent } from './card-educacion.component';

describe('CardEducacionComponent', () => {
  let component: CardEducacionComponent;
  let fixture: ComponentFixture<CardEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
