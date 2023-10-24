import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhiveComponentComponent } from './arhive-component.component';

describe('ArhiveComponentComponent', () => {
  let component: ArhiveComponentComponent;
  let fixture: ComponentFixture<ArhiveComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArhiveComponentComponent]
    });
    fixture = TestBed.createComponent(ArhiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
