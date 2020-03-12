import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heros';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.styl']
})
export class HerosComponent implements OnInit {
  heros: Hero[];
  aaa = 'bbb';
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  ngOnInit(): void {
    // 这一步也可以放在构造函数，但是不建议，构造函数应该尽可能简单。比如把构造函数的参数赋值给属性。 构造函数不应该做任何事。
    this.getHeroes();
  }
  // 获取heroes
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heros = heroes);
  }
  trackByItemId(item: Hero): number {
    return item.id;
  }
  add(name: string) {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => this.heros.push(hero));
  }
  delete(hero: Hero) {
    this.heros = this.heros.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
