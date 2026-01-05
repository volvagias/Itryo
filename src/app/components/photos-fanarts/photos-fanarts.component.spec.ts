import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosFanartsComponent } from './photos-fanarts.component';

describe('PhotosFanartsComponent', () => {
  let component: PhotosFanartsComponent;
  let fixture: ComponentFixture<PhotosFanartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosFanartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosFanartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
