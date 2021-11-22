import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aspersor1Component } from './aspersor1.component';

describe('Aspersor1Component', () => {
  let component: Aspersor1Component;
  let fixture: ComponentFixture<Aspersor1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aspersor1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aspersor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
