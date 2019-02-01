import { Component, OnInit } from '@angular/core';
import { GeoLocalizacaoService } from '../geo-localizacao.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
  providers: [GeoLocalizacaoService]
})
export class PaisComponent implements OnInit {

  public totalPaises: number = 0
  public paises: any[]

  constructor(
    private route: ActivatedRoute,
    private geoLocalizacaoService: GeoLocalizacaoService
  ) { }


  ngOnInit() {
    this.route.params.subscribe((parametros: Params)=>{
      this.geoLocalizacaoService.getAllPaises(parametros.idGeoNameContinente)
      .then((resposta: any)=>{
        console.log(resposta)
        this.totalPaises = resposta.totalResultsCount
        this.paises = resposta.geonames
      })
    })

    
  }

}
