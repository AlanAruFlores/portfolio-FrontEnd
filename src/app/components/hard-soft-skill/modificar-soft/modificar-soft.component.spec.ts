import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSoftComponent } from './modificar-soft.component';

describe('ModificarSoftComponent', () => {
  let component: ModificarSoftComponent;
  let fixture: ComponentFixture<ModificarSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
