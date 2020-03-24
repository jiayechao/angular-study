import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { DemoComponent } from './demo/demo.component';
import { ChildDemoComponent } from './child-demo/child-demo.component';
import { AdComponent } from './ad/ad.component';
import { AdDirective } from './ad.directive';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { FormdemoComponent } from './formdemo/formdemo.component';

// NgModule，它为组件提供了编译的上下文环境
// 至少有一个引导应用的根模块，通常还有很多特性模块

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    DemoComponent,
    ChildDemoComponent,
    AdComponent,
    AdDirective,
    HighlightDirective,
    UnlessDirective,
    FormdemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
