import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoNewsComponent } from './photo-news.component';

describe('PhotoNewsComponent', () => {
  let component: PhotoNewsComponent;
  let fixture: ComponentFixture<PhotoNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
