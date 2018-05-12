import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PonenteProvider } from '../../providers/ponente/ponente';
import { EventoProvider } from '../../providers/evento/evento';

@IonicPage()
@Component({
	selector: 'page-ponente',
	templateUrl: 'ponente.html'
})
export class PonentePage {

	dataList = [];
	evento = [];

	constructor(public navCtrl: NavController,public navParams: NavParams, private ponenteProvider:PonenteProvider, private eventoProvider:EventoProvider) {
		if(!this.navParams.get('numero')){
			console.log('Error Catastrofico')
		} else{
			this.getPonente(this.navParams.get('numero'));
			this.getEvento();
		}
	}

	getPonente(number){
		this.ponenteProvider.getPonente(number).subscribe(data => this.dataList = data);
	}

	getEvento(){
		this.eventoProvider.getEvento().subscribe(data => this.evento = data);
	}

	ionViewDidLoad() {
		
	}

}
