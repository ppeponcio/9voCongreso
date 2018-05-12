import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ActividadProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActividadProvider {

private url: string = "http://softloli.mindsoftdev.com/agenda-item/";

  constructor(public http: HttpClient) {
    console.log('Hello ActividadProvider Provider');
  }

  getActividad(number){
  	return this.http.get<any>(this.url+number+"?_format=json").do((res: Response) => console.log(res));
  }

}
