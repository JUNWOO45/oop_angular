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
    console.log('this.course : ', this.course);

    if(this.course.type === 'math') {
      this.color = 'red';
    } else if(this.course.type === 'english') {
      this.color = 'blue';
    } else if(this.course.type === 'history') {
      this.color = 'yellow';
    }
  }

}
