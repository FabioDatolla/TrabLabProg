import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Reg_Mensal_Page } from './Reg_Mensal.page';

const routes: Routes = [
  {
    path: '',
    component: Reg_Mensal_Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Reg_Mensal_Page]
})
export class Reg_Mensal_PageModule {}
