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
  public questions: Object;

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

    this.questions = [
      {id: 1, question: 'Qual era o nome do seu primeiro animal de estimação?'},
      {id: 2, question: 'Qual é o nome do meio do seu pai?'},
      {id: 3, question: 'Em qual cidade você nasceu?'},
      {id: 4, question: 'Qual é o nome do seu melhor amigo de infância?'},
      {id: 5, question: 'Qual é o nome de solteira da sua mãe?'}
    ];
  }

  async signUp() {
    
    if (this.onRegisterForm.dirty && this.onRegisterForm.valid) {
      const loader = await this.loadingCtrl.create();
      loader.present();

      this.httpClient.post(environment.api + '/api/bulletjournal', this.onRegisterForm.value)
        .subscribe((res) => {
          loader.dismiss();
          console.log(res);
          this.navCtrl.navigateRoot('/');
          this.presentToast('Usuário criado com sucesso.');
        }, (err) => {
          loader.dismiss();
          console.error(err);
          this.presentToast('Não foi possível criar o usuário.');
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
