import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosEnsayosComponent } from './photos-ensayos.component';

describe('PhotosEnsayosComponent', () => {
  let component: PhotosEnsayosComponent;
  let fixture: ComponentFixture<PhotosEnsayosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosEnsayosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosEnsayosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
