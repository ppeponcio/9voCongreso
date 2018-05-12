import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { PatrocinadorProvider } from '../../providers/patrocinador/patrocinador';
import { EventoProvider } from '../../providers/evento/evento';

@Component({
	selector: 'page-patrocinador',
	templateUrl: 'patrocinador.html'
})
export class PatrocinadorPage {

	dataList = [];
	evento = [];

	constructor(public navCtrl: NavController,public navParams: NavParams, private ponenteProvider:PatrocinadorProvider, private eventoProvider:EventoProvider) {
		if(!this.navParams.get('numero')){
			console.log('Error Catastrofico')
		} else{
			this.getPatrocinador(this.navParams.get('numero'));
			this.getEvento();
		}
	}

	getPatrocinador(number){
		this.ponenteProvider.getPatrocinador(number).subscribe(data => this.dataList = data);
	}

	getEvento(){
		this.eventoProvider.getEvento().subscribe(data => this.evento = data);
	}

	ionViewDidLoad() {
	}

}
