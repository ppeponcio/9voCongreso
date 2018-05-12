import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { HotelesPage } from '../hoteles/hoteles';
import { EventoProvider } from '../../providers/evento/evento';

@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html'
})
export class InformacionPage {
  
  evento = [];
  
  constructor(public navCtrl: NavController, private eventoProvider:EventoProvider) {
    this.getEvento();
  }


  getEvento(){
    this.eventoProvider.getEvento().subscribe(data => this.evento = data);
  }
  goToMapa(params){
    if (!params) params = {};
    this.navCtrl.push(MapaPage);
  }goToHoteles(params){
    if (!params) params = {};
    this.navCtrl.push(HotelesPage);
  }
}
