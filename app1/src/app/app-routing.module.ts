import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeoLocalizacaoComponent } from './geo-localizacao/geo-localizacao.component';
import { ContinenteComponent } from './geo-localizacao/continente/continente.component';
import { PaisComponent } from './geo-localizacao/pais/pais.component';

const routes: Routes = [
  {path: 'GeoLocalizacao', component: GeoLocalizacaoComponent, 
    children: [
      {path: '', component: ContinenteComponent},
      {path: 'continentes', component: ContinenteComponent},
      {path: 'paises/:idGeoNameContinente', component: PaisComponent}
    ]  
  },
  {path: '', redirectTo: 'GeoLocalizacao', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
