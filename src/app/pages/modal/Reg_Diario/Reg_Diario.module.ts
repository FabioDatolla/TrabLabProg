import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Reg_Diario_Page } from './Reg_Diario.page';

const routes: Routes = [
  {
    path: '',
    component: Reg_Diario_Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Reg_Diario_Page]
})
export class Reg_Diario_PageModule {}
