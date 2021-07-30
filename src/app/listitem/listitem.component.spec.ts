import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListitemComponent } from './listitem.component';

describe('ListitemComponent', () => {
  let component: ListitemComponent;
  let fixture: ComponentFixture<ListitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
