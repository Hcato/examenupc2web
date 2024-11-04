import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Pokemon {
  name: string;
  url: string;
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private url ="https://pokeapi.co/api/v2/pokemon";
  constructor(private http: HttpClient) { }
  getPokemons(): Observable<{ results: Pokemon[] }>{
    return this.http.get<{results: Pokemon[]}>(`${this.url}`);
  }
  getPokemonByIdi(id: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }  
  getPokemonById(url: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${url}`)
}
}