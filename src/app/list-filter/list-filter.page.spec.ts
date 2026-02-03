import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListFilterPage } from './list-filter.page';

describe('ListFilterPage', () => {
  let component: ListFilterPage;
  let fixture: ComponentFixture<ListFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
