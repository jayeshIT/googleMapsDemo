import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleRoutesComponent } from './multiple-routes.component';

describe('MultipleRoutesComponent', () => {
  let component: MultipleRoutesComponent;
  let fixture: ComponentFixture<MultipleRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
