import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeConfiguracionPage } from './home-configuracion.page';

describe('HomeConfiguracionPage', () => {
  let component: HomeConfiguracionPage;
  let fixture: ComponentFixture<HomeConfiguracionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeConfiguracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
