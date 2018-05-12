import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
/*
  Generated class for the AgendaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class AgendaProvider {

    private url: string = "http://softloli.mindsoftdev.com/agenda";

    constructor(private http: HttpClient) {
      console.log('Hello AgendaProvider Provider');
    }

    getAgendaAll(){
  	//console.log('yolo');
  	return this.http.get<any>(this.url+"?_format=json");
  	//.do((res: Response) => console.log(res));//.map(res => res.json());
  }

  getAgendaDia(fecha){
    return this.http.get<any>(this.url+"/"+fecha+"?_format=json");
  }

  getAgendaDiaSala(fecha, idSala){
    return this.http.get<any>(this.url+"/"+fecha+"/"+idSala+"?_format=json");
  }

}
