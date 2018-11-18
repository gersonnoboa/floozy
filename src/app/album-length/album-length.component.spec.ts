import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumLengthComponent } from './album-length.component';

describe('AlbumLengthComponent', () => {
  let component: AlbumLengthComponent;
  let fixture: ComponentFixture<AlbumLengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumLengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
