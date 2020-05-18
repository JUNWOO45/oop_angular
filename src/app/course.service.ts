import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public getColor(type: string): string {
    if(type === 'math') {
      return 'red';
    } else if(type === 'english') {
      return 'blue';
    } else if(type === 'history') {
      return 'yellow';
    }
  }
}
