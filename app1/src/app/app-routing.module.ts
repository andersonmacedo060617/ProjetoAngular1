import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeoLocalizacaoComponent } from './geo-localizacao/geo-localizacao.component';

const routes: Routes = [
  {path: 'GeoLocalizacao', component: GeoLocalizacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
