import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodsComponent } from './list-tods.component';

describe('ListTodsComponent', () => {
  let component: ListTodsComponent;
  let fixture: ComponentFixture<ListTodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
