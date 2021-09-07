import { Component } from '@angular/core';


@Component({
  selector: 'app-enfant',
  
  template: `
    <div>Avant la projection</div>
    <ng-content></ng-content>
    <div>Après la projection</div>
  `
})

export class EnfantComponent {
  
  constructor() { }

}
