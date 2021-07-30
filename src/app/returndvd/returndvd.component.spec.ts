import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturndvdComponent } from './returndvd.component';

describe('ReturndvdComponent', () => {
  let component: ReturndvdComponent;
  let fixture: ComponentFixture<ReturndvdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturndvdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturndvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
