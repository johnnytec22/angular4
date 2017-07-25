import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestVideoComponent } from './latest-video.component';

describe('LatestVideoComponent', () => {
  let component: LatestVideoComponent;
  let fixture: ComponentFixture<LatestVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
