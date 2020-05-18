import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oop-angular';
  courses = [
    {
      name: '주누주누역사수업', 
      type: 'history',
      price: 10000
    },
    {
      name: '마나마나수학수업', 
      type: 'math',
      price: 12000
    },
    {
      name: '영어교실', 
      type: 'english',
      price: 8000
    },
    {
      name: '로마역사', 
      type: 'history',
      price: 4700
    }
  ];

  constructor() {
  }
}
