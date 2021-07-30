import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowdvdComponent } from './borrowdvd.component';

describe('BorrowdvdComponent', () => {
  let component: BorrowdvdComponent;
  let fixture: ComponentFixture<BorrowdvdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowdvdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowdvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
