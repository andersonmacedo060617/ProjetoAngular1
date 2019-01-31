import { Component, OnInit } from '@angular/core';
import { GeoLocalizacaoService } from './geo-localizacao.service';

@Component({
  selector: 'app-geo-localizacao',
  templateUrl: './geo-localizacao.component.html',
  styleUrls: ['./geo-localizacao.component.css'],
  providers: [GeoLocalizacaoService]
})
export class GeoLocalizacaoComponent implements OnInit {

  public totalContinentes: number = 0
  public continentes: any[]

  constructor(private geoLocalizacaoService: GeoLocalizacaoService) { }

  ngOnInit() {

    this.geoLocalizacaoService.getAllContinentes()
      .then((resposta: any)=>{
        console.log(resposta)
        this.totalContinentes = resposta.totalResultsCount
        this.continentes = resposta.geonames
      })
  }

}
