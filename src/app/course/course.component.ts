import { Component, OnInit, Input } from '@angular/core';


export interface Course {
  type: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;

  public color: string;

  constructor() { 
  }

  ngOnInit() {
    // ngOnInit is not a pure function.
    // If more logic goes into ngOnInit, we won't be able to test dependent logic separately!
    // And if the logic is more complex than coloring, the component won't be representational anymore.

    if(this.course.type === 'math') {
      this.color = 'red';
    } else if(this.course.type === 'english') {
      this.color = 'blue';
    } else if(this.course.type === 'history') {
      this.color = 'yellow';
    }
  }

}
