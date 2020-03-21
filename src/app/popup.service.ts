import { Injectable, ComponentFactoryResolver } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  showAsComponent(message: string) {
    // create element
    const popupEl = document.createElement('popup-element');

    // Listen to the close event
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

    // Set the message
    // popupEl.message = message;

    // Add to the DOM
    document.body.appendChild(popupEl);
  }
}
