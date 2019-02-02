import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedTestLineGraphComponent } from './speed-test-line-graph.component';

describe('SpeedTestLineGraphComponent', () => {
  let component: SpeedTestLineGraphComponent;
  let fixture: ComponentFixture<SpeedTestLineGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedTestLineGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedTestLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
