import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HotelesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class HotelesProvider {

  	private url: string = "http://softloli.mindsoftdev.com/hoteles";

  	constructor(public http: HttpClient) {
  		console.log('Hello HotelesProvider Provider');
  	}

  	getHotelesAll(){
  	//console.log('yolo');
  	return this.http.get<any>(this.url+"?_format=json");
  	//.do((res: Response) => console.log(res));//.map(res => res.json());
  }

}
