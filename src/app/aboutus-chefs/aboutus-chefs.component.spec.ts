import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusChefsComponent } from './aboutus-chefs.component';

describe('AboutusChefsComponent', () => {
  let component: AboutusChefsComponent;
  let fixture: ComponentFixture<AboutusChefsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutusChefsComponent]
    });
    fixture = TestBed.createComponent(AboutusChefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
