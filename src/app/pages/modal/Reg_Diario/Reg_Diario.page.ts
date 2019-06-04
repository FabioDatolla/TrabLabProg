import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Reg_Diario',
  templateUrl: './Reg_Diario.page.html',
  styleUrls: ['./Reg_Diario.page.scss'],
})
export class Reg_Diario_Page implements OnInit {
  public onLoginForm: FormGroup;
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder) {
    
   }

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'senha': [null, Validators.compose([
        Validators.required
      ])]

  });


}

  

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
