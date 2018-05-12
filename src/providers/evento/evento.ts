import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class EventoProvider {

  	private url: string = "http://softloli.mindsoftdev.com/evento";

  	constructor(public http: HttpClient) {
  		console.log('Hello EventoProvider Provider');
  	}

  	getEvento(){
  		return this.http.get<any>(this.url+"?_format=json");
  	}

  }
