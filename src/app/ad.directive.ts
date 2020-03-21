import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAd]'
})
export class AdDirective {
  // 依赖注入指令的宿主视图
  constructor(public viewContainerRef: ViewContainerRef) { }

}
