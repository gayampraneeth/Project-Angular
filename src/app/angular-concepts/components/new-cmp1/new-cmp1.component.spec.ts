import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCmp1Component } from './new-cmp1.component';

describe('NewCmp1Component', () => {
  let component: NewCmp1Component;
  let fixture: ComponentFixture<NewCmp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCmp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
