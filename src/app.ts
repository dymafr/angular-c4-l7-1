import {Component, NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EnfantComponent} from './enfant.component';

@Component({
  selector: 'my-app',
  
  template: `
      <div>
        <app-enfant> Un peu de contenu...</app-enfant>
      </div>
  `
})

export class AppComponent {
  
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, EnfantComponent ],
  bootstrap: [ AppComponent ] 
})
export class AppModule {}