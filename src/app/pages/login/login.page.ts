import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  public questions: Object;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
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

    this.questions = {
      1: 'Qual era o nome do seu primeiro animal de estimação?',
      2: 'Qual é o nome do meio do seu pai?',
      3: 'Em qual cidade você nasceu?',
      4: 'Qual é o nome do seu melhor amigo de infância?',
      5: 'Qual é o nome de solteira da sua mãe?'
    };
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Esqueceu a senha?',
      message: 'Insira seu email para responder a pergunta de segurança.',
      inputs: [{
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }],
      buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Avançar',
          handler: async (data) => {
            const loader = await this.loadingCtrl.create();
            loader.present();
      
            this.httpClient.get(environment.api + '/api/bulletjournal/pergunta/' + data.email)
              .subscribe((res: any) => {
                loader.dismiss();
                console.log(res);
                this.answerSecret(data.email, res.perguntaSeguranca || '');
              }, (err) => {
                loader.dismiss();
                console.error(err);
                if (err.status === 404) {
                  this.presentToast('Email não encontrado.');
                } else {
                  this.presentToast('Erro no servidor.');
                }
              });
          }
        }]
    });

    await alert.present();
  }

  async answerSecret(email: string, question: number) {
    const alert = await this.alertCtrl.create({
      header: 'Esqueceu a senha?',
      message: 'Responda a pergunta de segurança para receber um código de recuperação.<br><br><b>' + this.questions[question] + '</b>',
      inputs: [{
          name: 'respostaSeguranca',
          type: 'text',
          placeholder: 'Resposta de Segurança'
        }],
      buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: async (data) => {
            const loader = await this.loadingCtrl.create();
            loader.present();
            
            this.httpClient.post(environment.api + '/api/bulletjournal/senha', {
              email: email,
              respostaSeguranca: data.respostaSeguranca
            })
              .subscribe((res) => {
                loader.dismiss();
                this.presentToast('Email enviado com sucesso.');
                this.recoverPassword(email);
              }, (err) => {
                loader.dismiss();
                console.error(err);
                this.presentToast('Não foi possível enviar o email.');
              });

          }
        }]
    });

    await alert.present();
  }

  async recoverPassword(email: string) {
    const alert = await this.alertCtrl.create({
      header: 'Redefinir senha',
      message: 'Insira o código de recuperação enviado por email e a nova senha.',
      inputs: [{
          name: 'email',
          type: 'text',
          placeholder: 'Email',
          value: email,
          disabled: true
        }, {
          name: 'codigo',
          type: 'text',
          placeholder: 'Código de Recuperação'
        }, {
          name: 'novaSenha',
          type: 'password',
          placeholder: 'Nova Senha'
        }],
      buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: async (data) => {
            const loader = await this.loadingCtrl.create();
            loader.present();
            
            this.httpClient.get(environment.api + '/api/bulletjournal/recuperacao/' + data.email + '/' + data.codigo)
              .subscribe((res: any) => {
                loader.dismiss();
                this.httpClient.put(environment.api + '/api/bulletjournal/senha/', {
                  email: data.email,
                  senha: res.senha,
                  novaSenha: data.novaSenha
                })
                  .subscribe((res: any) => {
                    loader.dismiss();
                    this.presentToast('Senha alterada com sucesso.');
                  }, (err) => {
                    loader.dismiss();
                    console.error(err);
                    this.presentToast('Não foi possível alterar a senha.');
                  });
              }, (err) => {
                loader.dismiss();
                console.error(err);
                this.presentToast('Não foi possível alterar a senha.');
              });

          }
        }]
    });

    await alert.present();
  }

  async presentToast(text: string) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

  // // //
  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home-results');
  }

}
