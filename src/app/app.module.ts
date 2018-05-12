import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PonentesPage } from '../pages/ponentes/ponentes';
import { PonentePage } from '../pages/ponente/ponente';
import { AgendaPage } from '../pages/agenda/agenda';
import { ActividadPage } from '../pages/actividad/actividad';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { PatrocinadoresPage } from '../pages/patrocinadores/patrocinadores';
import { PatrocinadorPage } from '../pages/patrocinador/patrocinador';
import { InformacionPage } from '../pages/informacion/informacion';
import { HotelesPage } from '../pages/hoteles/hoteles';
import { MapaPage } from '../pages/mapa/mapa';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { ActividadProvider } from '../providers/actividad/actividad';
import { AgendaProvider } from '../providers/agenda/agenda';
import { PonenteProvider } from '../providers/ponente/ponente';
import { PatrocinadorProvider } from '../providers/patrocinador/patrocinador';
import { HotelesProvider } from '../providers/hoteles/hoteles';
import { EventoProvider } from '../providers/evento/evento';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PonentesPage,
    PonentePage,
    AgendaPage,
    ActividadPage,
    TabsControllerPage,
    PatrocinadoresPage,
    PatrocinadorPage,
    InformacionPage,
    HotelesPage,
    MapaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PonentesPage,
    PonentePage,
    AgendaPage,
    ActividadPage,
    TabsControllerPage,
    PatrocinadoresPage,
    PatrocinadorPage,
    InformacionPage,
    HotelesPage,
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ActividadProvider,
    AgendaProvider,
    PonenteProvider,
    PatrocinadorProvider,
    HotelesProvider,
    EventoProvider
  ]
})
export class AppModule {}