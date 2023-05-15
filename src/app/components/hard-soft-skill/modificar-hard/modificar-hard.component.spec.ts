import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarHardComponent } from './modificar-hard.component';

describe('ModificarHardComponent', () => {
  let component: ModificarHardComponent;
  let fixture: ComponentFixture<ModificarHardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarHardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
