import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExperienciaComponent } from './card-experiencia.component';

describe('CardExperienciaComponent', () => {
  let component: CardExperienciaComponent;
  let fixture: ComponentFixture<CardExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
