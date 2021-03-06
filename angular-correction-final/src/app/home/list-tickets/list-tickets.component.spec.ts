import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTicketsComponent } from './list-tickets.component';

describe('ListTicketsComponent', () => {
  let component: ListTicketsComponent;
  let fixture: ComponentFixture<ListTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
