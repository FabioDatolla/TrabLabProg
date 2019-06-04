import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reg_Futuro_Page } from './Reg_Futuro.page';

describe('Reg_Futuro_Page', () => {
  let component: Reg_Futuro_Page;
  let fixture: ComponentFixture<Reg_Futuro_Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reg_Futuro_Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reg_Futuro_Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
