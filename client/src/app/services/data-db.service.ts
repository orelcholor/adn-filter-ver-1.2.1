import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadena } from '../models/cadena';

@Injectable({
  providedIn: 'root'
})

export class DataDbService {
  private urlApi: string;
  public cadenas : Array<Cadena>;

  constructor(public _http: HttpClient) { 
    this.urlApi = 'https://adn-filter-reborn-332303.wl.r.appspot.com/api/hasMutation';
    this.cadenas = [
      new Cadena(["XDDD"])
    ]
  }
  //metodos ONLINE
  //GET
  getAdnApi(): Observable<any>{
    return this._http.get(this.urlApi);
  }

  //POST
  addAdnApi(adn: Cadena): Observable<any>{
    return this._http.post<Cadena>(this.urlApi, adn);
  }

  //Metodo get (local)
  getAdns(): Array<Cadena>{
    return this.cadenas
  }

}
