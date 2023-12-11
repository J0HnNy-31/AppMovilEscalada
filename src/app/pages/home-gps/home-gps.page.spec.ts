import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeGpsPage } from './home-gps.page';

describe('HomeGpsPage', () => {
  let component: HomeGpsPage;
  let fixture: ComponentFixture<HomeGpsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeGpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
