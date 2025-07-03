import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosSessionsComponent } from './photos-sessions.component';

describe('PhotosSessionsComponent', () => {
  let component: PhotosSessionsComponent;
  let fixture: ComponentFixture<PhotosSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosSessionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
