import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PonenteProvider } from '../../providers/ponente/ponente';
import { EventoProvider } from '../../providers/evento/evento';
import { PonentePage } from '../../pages/ponente/ponente';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	dataList = [];

	evento = [];

	constructor(public navCtrl: NavController, private ponenteProvider: PonenteProvider, private eventoProvider: EventoProvider) {
		this.getPonentesDestacados();
		this.getEvento();

	}
	getPonentesDestacados(){
		this.ponenteProvider.getPonentesDestacados().subscribe(data => this.dataList = data);
	}
	getEvento(){
		this.eventoProvider.getEvento().subscribe(data => this.evento = data);

		console.log(this.evento[0])
	}

	linkButton(number){
		this.navCtrl.push(PonentePage, {numero:number});
	} 

}
