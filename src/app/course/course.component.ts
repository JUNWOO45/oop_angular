import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../course.service';


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

  constructor(private courseService: CourseService) { 
  }

  ngOnInit() {
    this.color = this.courseService.getColor(this.course.type);
  }

}
