import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DemoComponent } from './demo/demo.component';
import { AdComponent } from './ad/ad.component';

const routes: Routes = [
  // 完全匹配
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HerosComponent},
  { path: 'dashboard', component: DashboardComponent },
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'demo', component: DemoComponent},
  {path: 'ad', component: AdComponent}
];

@NgModule({
  // 这个方法之所以叫 forRoot()，是因为你要在应用的顶级配置这个路由器。
  // forRoot() 方法会提供路由所需的服务提供商和指令，还会基于浏览器的当前 URL 执行首次导航。
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
