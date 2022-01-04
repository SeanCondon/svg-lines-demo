import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.css']
})
export class Box1Component implements OnInit {
  @Input() title: string = "box1-title";
  @Input() top: number = 300;
  @Input() left: number = 10;
  @Input() width: number = 300;

  constructor() { }

  ngOnInit(): void {
  }

}
