import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharednavbarComponent } from './sharednavbar.component';

describe('SharednavbarComponent', () => {
  let component: SharednavbarComponent;
  let fixture: ComponentFixture<SharednavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharednavbarComponent]
    });
    fixture = TestBed.createComponent(SharednavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
