import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private  alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      backdropDismiss:false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK']
    });
    await alert.present();

  }

  async presentAlertMultilpeButton(){
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Import message',
      message: 'This is an alert',
      buttons: [
      {
        text: 'Ok',
        handler:()=>{
          console.log('Click en Ok')
        }
      }, 

      {
        text: 'Cancelar',
        role: 'Cancel',
        cssClass: 'rojo'
      }

      ]
    });
    await alert.present();
  }; 

}
