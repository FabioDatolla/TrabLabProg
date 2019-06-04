import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-Reg_Mensal',
  templateUrl: './Reg_Mensal.page.html',
  styleUrls: ['./Reg_Mensal.page.scss'],
})
export class Reg_Mensal_Page implements OnInit {
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
