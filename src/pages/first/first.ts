import { CategoriasPage } from './../categorias/categorias';
import { MapaPage } from './../mapa/mapa';
import { IntGymPage } from './../int-gym/int-gym';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

  goInt(){
    this.navCtrl.push(IntGymPage);
  }

  goToMap(){
    this.navCtrl.push(MapaPage);
  }

  goToFiltrar(){
    this.navCtrl.push(CategoriasPage);
  }

}
