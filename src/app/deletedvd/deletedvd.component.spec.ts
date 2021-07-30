import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedvdComponent } from './deletedvd.component';

describe('DeletedvdComponent', () => {
  let component: DeletedvdComponent;
  let fixture: ComponentFixture<DeletedvdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedvdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
