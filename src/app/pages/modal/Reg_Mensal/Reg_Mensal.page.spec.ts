import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reg_Mensal_Page } from './Reg_Mensal.page';

describe('Reg_Mensal_Page', () => {
  let component: Reg_Mensal_Page;
  let fixture: ComponentFixture<Reg_Mensal_Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reg_Mensal_Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reg_Mensal_Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
