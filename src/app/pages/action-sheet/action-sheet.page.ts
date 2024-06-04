import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentActionSheet();
  }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create ({
      header:'dormir zzzzz',
      backdropDismiss:false,
      cssClass: 'my-custom-class',
        buttons:[{
          text: 'Delete',
          role: 'destructive',
          icon:'trash-outline',
          cssClass:'rojo',
          id: 'delete-button',
          data: {
            type: 'delete'
          },
          handler: () => {
            console.log('borrar');
          }
        },

      {
        text:'Share',
        icon: 'Share-outline',
        data:10,
        handler: () => {
          console.log('Share click')
        }
      },

      {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle-outline',
        data: 'Data value',
        handler: () => {
          console.log('favorite click');
        }
      },
      
      {
        text: 'Cancel',
        icon: 'close-outline',
        data: 'cancel',
        handler: () => {
          console.log('Cancel click');
        }
      }]
    });
    await actionSheet.present();

    const {role, data} = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
    
  }

}
