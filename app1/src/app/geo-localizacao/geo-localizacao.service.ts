
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeoLocalizacaoService{
    

    
    private GeoNameId: any = {Continente: 6295630}
    constructor(public http: HttpClient){}

    public getAllContinentes(): Promise<any>{
       return this.http.get<any>(`http://www.geonames.org/childrenJSON?geonameId=${this.GeoNameId.Continente}`)
        .toPromise()
        .then((resposta: any)=>resposta)
    }
}