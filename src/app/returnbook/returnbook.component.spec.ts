import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnbookComponent } from './returnbook.component';

describe('ReturnbookComponent', () => {
  let component: ReturnbookComponent;
  let fixture: ComponentFixture<ReturnbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
