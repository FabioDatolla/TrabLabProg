import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Reg_Futuro_Page } from './Reg_Futuro.page';

const routes: Routes = [
  {
    path: '',
    component: Reg_Futuro_Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Reg_Futuro_Page]
})
export class Reg_Futuro_PageModule {}
