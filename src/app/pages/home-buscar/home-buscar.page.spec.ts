import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeBuscarPage } from './home-buscar.page';

describe('HomeBuscarPage', () => {
  let component: HomeBuscarPage;
  let fixture: ComponentFixture<HomeBuscarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeBuscarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
