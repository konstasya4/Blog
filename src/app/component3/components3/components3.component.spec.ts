import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Components3Component } from './components3.component';

describe('Components3Component', () => {
  let component: Components3Component;
  let fixture: ComponentFixture<Components3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Components3Component]
    });
    fixture = TestBed.createComponent(Components3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
