import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItryoPortadaComponent } from './itryo-portada.component';

describe('ItryoPortadaComponent', () => {
  let component: ItryoPortadaComponent;
  let fixture: ComponentFixture<ItryoPortadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItryoPortadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItryoPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
