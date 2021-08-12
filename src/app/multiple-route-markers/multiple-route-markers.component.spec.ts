import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleRouteMarkersComponent } from './multiple-route-markers.component';

describe('MultipleRouteMarkersComponent', () => {
  let component: MultipleRouteMarkersComponent;
  let fixture: ComponentFixture<MultipleRouteMarkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleRouteMarkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleRouteMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
