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
    // 서비스로 빼내는 방법 말고, 더 잘할 수 없을까?
    // 여전히 If-else문이 scaleable하지 않다.(표현이 이게 맞나?)
    this.color = this.courseService.getColor(this.course.type);
  }

}
