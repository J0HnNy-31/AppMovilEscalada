import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCrearPage } from './home-crear.page';

describe('HomeCrearPage', () => {
  let component: HomeCrearPage;
  let fixture: ComponentFixture<HomeCrearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
