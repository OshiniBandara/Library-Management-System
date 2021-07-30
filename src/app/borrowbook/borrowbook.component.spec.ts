import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowbookComponent } from './borrowbook.component';

describe('BorrowbookComponent', () => {
  let component: BorrowbookComponent;
  let fixture: ComponentFixture<BorrowbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
