import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aspersor2Component } from './aspersor2.component';

describe('Aspersor2Component', () => {
  let component: Aspersor2Component;
  let fixture: ComponentFixture<Aspersor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aspersor2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aspersor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
