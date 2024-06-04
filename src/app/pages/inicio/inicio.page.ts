import { Component, OnInit } from '@angular/core';

//crear una interface para definir propiedades que el componente lista a tenerr

interface Componente  {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //crear un nuevo listado
  //componentes: any[] = [];

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'people-circle-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'calendar-number-outline',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Input',
      redirectTo: '/input'
    }
  ] 

  constructor() { }

  ngOnInit() {
  }

}
