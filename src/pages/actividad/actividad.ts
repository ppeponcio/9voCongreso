import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActividadProvider } from '../../providers/actividad/actividad';

/**
 * Generated class for the ActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-actividad',
 	templateUrl: 'actividad.html',
 })
 export class ActividadPage {

 	actividad = [];

 	constructor(public navCtrl: NavController, public navParams: NavParams, private actividadProvider:ActividadProvider) {
 		if(!this.navParams.get('numero')){
 			console.log('Error Catastrofico')
 		} else{
 			this.getActividad(this.navParams.get('numero'));
 		}
 	}

 	getActividad(number){
 		this.actividadProvider.getActividad(number).subscribe(data => this.actividad = data);
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ActividadPage');
 	}

 }
