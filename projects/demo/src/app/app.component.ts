import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  template: `
    <p>
      <css-slide label="ejemplo2" (changeEvent)="handlerChangeEvent($event)"></css-slide>
    </p>
  `,
  styles: []
})
export class AppComponent {
  handlerChangeEvent($event: MatSlideToggleChange) {
    console.log($event)
  }
}
