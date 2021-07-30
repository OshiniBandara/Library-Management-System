import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebookComponent } from './deletebook.component';

describe('DeletebookComponent', () => {
  let component: DeletebookComponent;
  let fixture: ComponentFixture<DeletebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
