import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  background = '#e66465';
  setBackGround(background) {
    this.background = background;
  }
  constructor() { }

  ngOnInit() {
  }

}
