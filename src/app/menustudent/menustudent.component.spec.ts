import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenustudentComponent } from './menustudent.component';

describe('MenustudentComponent', () => {
  let component: MenustudentComponent;
  let fixture: ComponentFixture<MenustudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenustudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenustudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
