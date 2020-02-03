import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herosform',
  templateUrl: './herosform.component.html',
  styleUrls: ['./herosform.component.scss']
})
export class HerosformComponent implements OnInit {
  
  val1: string;

    val2: string = 'Option 2';
  
  constructor() { }

  ngOnInit() {
  }

}
