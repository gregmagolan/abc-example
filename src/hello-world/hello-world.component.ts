
import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'hello-world-app',
  template: `
    <div id="greeting">Hello {{ name }}</div>
    <input type="text" [value]="name" (input)="name = $event.target.value"/>
  `,
  // TODO: might be better to point to .scss so this looks valid at design-time
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  name: string = 'World';
}
