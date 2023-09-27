import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {

  private cocktails: Cocktail[] = [
    new Cocktail('Mojito', 9, 'https://www.destinationcocktails.fr/wp-content/uploads/2018/04/cocktail-mojito-auvergnat-1.jpg'),
    new Cocktail('Margarita', 8, 'https://drinkoteket.com/wp-content/uploads/margarita-1.jpg'),

  ];

  getCocktails() {
    return this.cocktails;
  }
}
