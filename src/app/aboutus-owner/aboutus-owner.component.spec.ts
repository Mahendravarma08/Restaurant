import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusOwnerComponent } from './aboutus-owner.component';

describe('AboutusOwnerComponent', () => {
  let component: AboutusOwnerComponent;
  let fixture: ComponentFixture<AboutusOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutusOwnerComponent]
    });
    fixture = TestBed.createComponent(AboutusOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
