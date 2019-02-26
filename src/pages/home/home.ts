import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MisClasesPage } from '../mis-clases/mis-clases';
import { HorariosPage } from '../horarios/horarios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  irAMisClases() {
    this.navCtrl.push(MisClasesPage);
  }
  irAHorarios() {
    this.navCtrl.push(HorariosPage);
  }
  irAEventos() {

  }

}
