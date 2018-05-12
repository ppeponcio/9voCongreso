import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PonentesPage } from '../ponentes/ponentes';
import { AgendaPage } from '../agenda/agenda';
import { PatrocinadoresPage } from '../patrocinadores/patrocinadores';
import { InformacionPage } from '../informacion/informacion';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = PonentesPage;
  tab3Root: any = AgendaPage;
  tab4Root: any = PatrocinadoresPage;
  tab5Root: any = InformacionPage;
  constructor(public navCtrl: NavController) {
  }
  
}
