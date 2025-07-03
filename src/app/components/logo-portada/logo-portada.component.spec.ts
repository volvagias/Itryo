import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoPortadaComponent } from './logo-portada.component';

describe('LogoPortadaComponent', () => {
  let component: LogoPortadaComponent;
  let fixture: ComponentFixture<LogoPortadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoPortadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
