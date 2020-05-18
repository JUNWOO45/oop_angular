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
    },
    {
      name: '자바스크립트 강좌',
      type: 'javascript',
      price: 50000
    },
    {
      name: '근현대사', 
      type: 'history',
      price: 8700
    },
    {
      name: 'CSS배워봐요.', 
      type: 'css',
      price: 5000
    },
    {
      name: '덧셈뺄셈곱셈나눗셈', 
      type: 'math',
      price: 2300
    },
  ];

  constructor() {
  }
}
