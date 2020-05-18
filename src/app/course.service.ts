import { Injectable } from '@angular/core';
import { Course } from './course/course.component';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public getColor( { type, price }: Course): string {
    // if-else문의 중첩이 너무 어렵다.
    // 프로덕트에서 자주 겪었던 문제이다.

    if(type === 'math') {
      if(price > 10000) {
        return 'orange';
      } 
    
      return 'red';
    } else if(type === 'english') {

      return 'blue';
    } else if(type === 'history') {
      if(price > 8000) {
        return 'yellow';
      }

      return 'purple';
    } else if(type === 'javascript') {
      return 'green';
    } else if(type === 'css') {
      return 'skyblue';
    }

    return 'gray';
  }
}
