import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarExperienciaComponent } from './modificar-experiencia.component';

describe('ModificarExperienciaComponent', () => {
  let component: ModificarExperienciaComponent;
  let fixture: ComponentFixture<ModificarExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
