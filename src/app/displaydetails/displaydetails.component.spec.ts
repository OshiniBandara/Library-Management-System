import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydetailsComponent } from './displaydetails.component';

describe('DisplaydetailsComponent', () => {
  let component: DisplaydetailsComponent;
  let fixture: ComponentFixture<DisplaydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
