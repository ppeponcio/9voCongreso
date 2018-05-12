import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PatrocinadorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class PatrocinadorProvider {

  	private url: string = "http://softloli.mindsoftdev.com/patrocinadores";

  	constructor(public http: HttpClient) {
  		console.log('Hello PatrocinadorProvider Provider');
  	}

  	getPatrocinadorAll(){
  		return this.http.get<any>(this.url+"?_format=json");
  	}

    getPatrocinador(number){
      return this.http.get<any>(this.url+"/"+number+"?_format=json");
    }

  }
