import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'nome': [null, Validators.compose([
        Validators.required
      ])],
      'sobrenome': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'senha': [null, Validators.compose([
        Validators.required
      ])],
      'perguntaSeguranca': [null, Validators.compose([
        Validators.required
      ])],
      'respostaSeguranca': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async signUp() {
    const loader = await this.loadingCtrl.create();

    loader.present();

    if (this.onRegisterForm.dirty && this.onRegisterForm.valid) {

      this.httpClient.post(environment.api + '/api/bulletjournal', this.onRegisterForm.value)
        .subscribe((res) => {
          loader.dismiss();
          console.log(res);
          this.navCtrl.navigateRoot('/');
          this.presentToast('Conta criada com sucesso');
        }, (err) => {
          loader.dismiss();
          console.error(err);
        });

    }

  }

  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

  // // //
  async goToLogin() {
    this.navCtrl.navigateRoot('/');
  }

}
