import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'svg-lines-demo';
  innerWidth: number = window.innerWidth;
  innerHeight: number = window.innerHeight;

}
