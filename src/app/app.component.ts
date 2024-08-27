import { AboutPage } from './about/about.page';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private a: NavController) {}

  Aboutpage(){
this.a.navigateForward('/about')
  }
}
