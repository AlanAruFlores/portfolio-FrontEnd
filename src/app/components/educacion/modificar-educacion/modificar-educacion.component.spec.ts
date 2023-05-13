import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEducacionComponent } from './modificar-educacion.component';

describe('ModificarEducacionComponent', () => {
  let component: ModificarEducacionComponent;
  let fixture: ComponentFixture<ModificarEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
