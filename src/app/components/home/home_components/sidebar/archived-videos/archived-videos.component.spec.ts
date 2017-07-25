import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedVideosComponent } from './archived-videos.component';

describe('ArchivedVideosComponent', () => {
  let component: ArchivedVideosComponent;
  let fixture: ComponentFixture<ArchivedVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
