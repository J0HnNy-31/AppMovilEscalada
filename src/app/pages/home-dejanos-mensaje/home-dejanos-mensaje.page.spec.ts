import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeDejanosMensajePage } from './home-dejanos-mensaje.page';

describe('HomeDejanosMensajePage', () => {
  let component: HomeDejanosMensajePage;
  let fixture: ComponentFixture<HomeDejanosMensajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeDejanosMensajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
