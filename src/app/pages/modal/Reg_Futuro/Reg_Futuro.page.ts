import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-Reg_Futuro',
  templateUrl: './Reg_Futuro.page.html',
  styleUrls: ['./Reg_Futuro.page.scss'],
})
export class Reg_Futuro_Page implements OnInit {
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
