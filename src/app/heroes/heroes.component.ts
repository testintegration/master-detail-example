import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

/*
Styles and stylesheets identified in @Component metadata are scoped to that specific component.

The heroes.component.css styles apply only to the HeroesComponent and don't affect the outer HTML or the HTML in any other component.


*/
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  // When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.
  constructor(private heroService: HeroService) { }

  // after constructing a HeroesComponent instance.
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes() // shouln't heroes be the Observable<Hero[]> ???
    .subscribe((heroes) => {
      console.log('heroes: ', typeof heroes);

      this.heroes = heroes;
      console.log('this.heroes: ', typeof this.heroes);
    });

  }

}
