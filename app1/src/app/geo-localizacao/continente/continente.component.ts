import { Component, OnInit } from '@angular/core';
import { GeoLocalizacaoService } from '../geo-localizacao.service';

@Component({
  selector: 'app-continente',
  templateUrl: './continente.component.html',
  styleUrls: ['./continente.component.css'],
  providers: [GeoLocalizacaoService]
})
export class ContinenteComponent implements OnInit {

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
