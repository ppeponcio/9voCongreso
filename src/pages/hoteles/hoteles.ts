import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HotelesProvider } from '../../providers/hoteles/hoteles';
import { EventoProvider } from '../../providers/evento/evento';

@Component({
	selector: 'page-hoteles',
	templateUrl: 'hoteles.html'
})
export class HotelesPage {

	dataList = [];
	evento = [];

	constructor(public navCtrl: NavController, private hotelesProvider: HotelesProvider, private eventoProvider:EventoProvider) {
		this.getPonentes();
		this.getEvento();
	}

	getPonentes(){
		this.hotelesProvider.getHotelesAll().subscribe(data => this.dataList = data);
	}

	getEvento(){
		this.eventoProvider.getEvento().subscribe(data => this.evento = data);
	}

}
