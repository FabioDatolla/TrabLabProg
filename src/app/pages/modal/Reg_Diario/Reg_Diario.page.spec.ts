import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reg_Diario_Page } from './Reg_Diario.page';

describe('Reg_Diario_Page', () => {
  let component: Reg_Diario_Page;
  let fixture: ComponentFixture<Reg_Diario_Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reg_Diario_Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents(); 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reg_Diario_Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
