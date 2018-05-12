import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PonentePage } from './ponente';

@NgModule({
  declarations: [
    PonentePage,
  ],
  imports: [
    IonicPageModule.forChild(PonentePage),
  ],
})
export class PonentePageModule {}