import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';

declare var google: any;

@Component({
	selector: 'page-mapa',
	templateUrl: 'mapa.html'
})
export class MapaPage {
  @ViewChild('map') mapRef: ElementRef;
  evento = [];
  constructor(public navCtrl: NavController, private eventoProvider:EventoProvider) {
    this.getEvento();
      }

  ionViewDidLoad(){
  	this.showMap();
  }

  getEvento(){
    this.eventoProvider.getEvento().subscribe(data => this.evento = data);
  }
  
  showMap(){
  //locacion
  const location = new google.maps.LatLng(-0.205157, -78.485328);

  const options = {
  	center: location,
  	zoom: 15,
  	streetViewControl: false
  }

  const map = new google.maps.Map(this.mapRef.nativeElement,options);

  this.addMarker(location,map);

}

addMarker(position, map){
	return new google.maps.Marker({
		position,
		map
	});
}

}
