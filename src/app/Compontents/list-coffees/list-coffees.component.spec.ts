import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoffeesComponent } from './list-coffees.component';

describe('ListCoffeesComponent', () => {
  let component: ListCoffeesComponent;
  let fixture: ComponentFixture<ListCoffeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCoffeesComponent]
    });
    fixture = TestBed.createComponent(ListCoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
