import { Component } from '@angular/core';
import {Anchor} from "./joiner/joiner.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'svg-lines-demo';
  innerWidth: number = window.innerWidth;
  innerHeight: number = window.innerHeight;

  upperBoxAnchor = {x: 0, y:0} as Anchor;
  lowerBoxAnchor = {x: 0, y:0} as Anchor;
  aBoxAnchor = {x: 0, y:0} as Anchor;
  bBoxAnchor = {x: 0, y:0} as Anchor;
  cBoxAnchor = {x: 0, y:0} as Anchor;

}
