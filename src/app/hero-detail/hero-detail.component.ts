import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.styl']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  getHero(): void {
    // route.snapshot 是一个路由信息的静态快照，抓取自组件刚刚创建完毕之后。
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  save() {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
  goBack() {
    this.location.back();
  }
  ngOnInit(): void {
    this.getHero();
  }

}
