import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarLibroComponent } from './buscar-libro.component';

describe('BuscarLibroComponent', () => {
  let component: BuscarLibroComponent;
  let fixture: ComponentFixture<BuscarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarLibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
