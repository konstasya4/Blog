import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Components2Component } from './components2.component';

describe('Components2Component', () => {
  let component: Components2Component;
  let fixture: ComponentFixture<Components2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Components2Component],
    });
    fixture = TestBed.createComponent(Components2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
