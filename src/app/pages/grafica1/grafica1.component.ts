import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

 labels1: string[] = ['Bread', 'Apple', 'Sugar'];
 data1 =  [
  [10, 15, 40],
];

labels2: string[] = ['Shoes', 'TV', 'Computer'];
 data2 =  [
  [100, 15, 35],
];

  constructor() { }

  ngOnInit(): void {
  }

  

}
