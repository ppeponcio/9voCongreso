import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PatrocinadorProvider } from '../../providers/patrocinador/patrocinador';
import { PatrocinadorPage } from '../../pages/patrocinador/patrocinador';
import { EventoProvider } from '../../providers/evento/evento';

@Component({
	selector: 'page-patrocinadores',
	templateUrl: 'patrocinadores.html'
})
export class PatrocinadoresPage {
	dataList = [];
	evento = [];
	
	constructor(public navCtrl: NavController, private patrocinadorProvider: PatrocinadorProvider, private eventoProvider:EventoProvider) {
		this.getPatrocinadores();
		this.getEvento();
	}

	getPatrocinadores(){
		this.patrocinadorProvider.getPatrocinadorAll().subscribe(data => this.dataList = data);
	}

	getEvento(){
		this.eventoProvider.getEvento().subscribe(data => this.evento = data);
	}

	linkButton(number){
		this.navCtrl.push(PatrocinadorPage, {numero:number});
	}

}
