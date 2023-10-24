import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Components4Component } from './components4.component';

describe('Components4Component', () => {
  let component: Components4Component;
  let fixture: ComponentFixture<Components4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Components4Component],
    });
    fixture = TestBed.createComponent(Components4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
