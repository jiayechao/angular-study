import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { AdDirective } from '../ad.directive';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-a',
  template: `<p>组件A {{message}}</p>`
})
export class AComponent {
  message = '是的，我是组件A';
  constructor() {}
}

@Component({
  selector: 'app-b',
  template: `<p>组件B{{message}}</p>`
})
export class BComponent {
  message = '是的，我是组件B';
  constructor() {}
}




@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.styl']
})
export class AdComponent implements OnInit {
  i = 0;
  @ViewChild(AdDirective, {static: true}) appAd: AdDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private popupService: PopupService) { }

  // 切换
  switchComponent() {
    // 获取一个组件工厂实例
    const com = this.componentFactoryResolver.resolveComponentFactory(this.i++ % 2 === 0 ? AComponent : BComponent);
    // 拿到宿主元素
    const viewContainerRef  = this.appAd.viewContainerRef;
    // 先清空
    viewContainerRef.clear();
    // 挂载工厂实例
    const componentRef = viewContainerRef.createComponent(com);
    // 给实例添加数据
    componentRef.instance.message = '我要替换你们';
  }

  ngOnInit(): void {
    setInterval(() => (
      this.switchComponent()
    ), 5000);
  }
  show() {
    this.popupService.showAsComponent('xxxxxxx')
  }
}
