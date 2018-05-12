import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PonenteProvider } from '../../providers/ponente/ponente';
import { PonentePage } from '../../pages/ponente/ponente';
import { EventoProvider } from '../../providers/evento/evento';

@Component({
  selector: 'page-ponentes',
  templateUrl: 'ponentes.html'
})
export class PonentesPage {

  dataList = [];
  evento = [];

  constructor(public navCtrl: NavController, private ponenteProvider: PonenteProvider, private eventoProvider:EventoProvider) {
    this.getPonentes();
    this.getEvento();
  }

  getPonentes(){
  	this.ponenteProvider.getPonentesAll().subscribe(data => this.dataList = data);
  }

  getEvento(){
    this.eventoProvider.getEvento().subscribe(data => this.evento = data);
  }

  linkButton(number){
  	this.navCtrl.push(PonentePage, {numero:number});
  }
  
}
