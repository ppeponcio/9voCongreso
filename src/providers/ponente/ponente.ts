import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PonenteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class PonenteProvider {

  	private url: string = "http://softloli.mindsoftdev.com/ponente";

  	constructor(public http: HttpClient) {
  		console.log('Hello PonenteProvider Provider');
  	}

  	getPonentesAll(){
  	//console.log('yolo');
  	return this.http.get<any>(this.url+"?_format=json");
  	//.do((res: Response) => console.log(res));//.map(res => res.json());
  }

  getPonente(number){
  	return this.http.get<any>(this.url+"/"+number+"?_format=json");
  }
    getPonentesDestacados(){
    //console.log('yolo');
    return this.http.get<any>(this.url+"-des?_format=json");
    //.do((res: Response) => console.log(res));//.map(res => res.json());
  }

}
