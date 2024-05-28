import { Component, inject, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {

  public cocktails: Cocktail[] = []

  private CocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.CocktailService.getCocktails().subscribe(cocktailsFromJson => {
      this.cocktails = cocktailsFromJson;
    })
  }
}
