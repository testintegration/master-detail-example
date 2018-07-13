import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // It can take a callback. It could return a Promise. It could return an Observable.
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    // Returns an Observable instance that synchronously delivers the values provided as arguments.
    return of(HEROES); // return an observable
  }

}
