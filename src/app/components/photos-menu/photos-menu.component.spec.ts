import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosMenuComponent } from './photos-menu.component';

describe('PhotosMenuComponent', () => {
  let component: PhotosMenuComponent;
  let fixture: ComponentFixture<PhotosMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
