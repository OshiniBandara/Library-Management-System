import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydvdComponent } from './displaydvd.component';

describe('DisplaydvdComponent', () => {
  let component: DisplaydvdComponent;
  let fixture: ComponentFixture<DisplaydvdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydvdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
