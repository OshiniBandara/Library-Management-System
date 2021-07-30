import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddvdComponent } from './adddvd.component';

describe('AdddvdComponent', () => {
  let component: AdddvdComponent;
  let fixture: ComponentFixture<AdddvdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddvdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
