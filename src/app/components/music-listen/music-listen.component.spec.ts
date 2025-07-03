import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicListenComponent } from './music-listen.component';

describe('MusicListenComponent', () => {
  let component: MusicListenComponent;
  let fixture: ComponentFixture<MusicListenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicListenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
