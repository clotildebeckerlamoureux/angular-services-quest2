import { Injectable, inject } from '@angular/core';
import { Cocktail } from './models/cocktail.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  private http = inject(HttpClient);

  constructor() { }

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("assets/cocktails.json");
  }
}
