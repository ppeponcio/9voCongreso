import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AgendaProvider } from '../../providers/agenda/agenda';
import { ActividadPage } from "../../pages/actividad/actividad";
import { EventoProvider } from '../../providers/evento/evento';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {

	agendaDiaList = [];

  agendaSalaList = [];

  agendaList = [];

  evento = [];

  fecha;
  idSala;

  constructor(public navCtrl: NavController,public navParams: NavParams, private agendaProvider : AgendaProvider, private eventoProvider:EventoProvider) {
    this.getEvento();
    if(!this.navParams.get('fecha')){
      this.fecha = "20180531";
    }else{
      console.log(this.navParams.get('fecha'))
      this.fecha = this.navParams.get('fecha');
    }
    this.getAgendaDia(this.fecha);
  }

  getEvento(){
    this.eventoProvider.getEvento().subscribe(data => this.evento = data);
  }

  getAgendaAll(){
  	this.agendaProvider.getAgendaAll().subscribe(data => this.agendaList = data);//prueba
  }

  getAgendaDia(fecha){
    this.agendaProvider.getAgendaDia(fecha).subscribe(data => this.agendaDiaList = data);
    if(!this.navParams.get('idSala')){
      this.idSala = 4;
    }else{
      this.idSala = this.navParams.get('idSala');
    }
    this.getAgendaDiaSala(this.fecha, this.idSala);

  }

  getAgendaDiaSala(fecha, idSala){
    this.agendaProvider.getAgendaDiaSala(fecha, idSala).subscribe(data => this.agendaSalaList = data);
  }

  linkButtonActividad(number){
  	this.navCtrl.push(ActividadPage,{numero: number});
  }

  linkButtonDia(fecha){
    var con = fecha.split('-');
    this.navCtrl.push(AgendaPage,{fecha: con[0]+con[1]+con[2]},{animate:false});
  }

  linkButtonDiaSala(fecha, idSala){
    this.navCtrl.push(AgendaPage,{fecha: fecha, idSala: idSala},{animate:false});
  }
  
  toggleSection(i) {
    this.agendaDiaList[i].open = !this.agendaDiaList[i].open;
  }

  toggleSection2(i) {
    this.agendaSalaList[i].open = !this.agendaSalaList[i].open;
  }
  
}
