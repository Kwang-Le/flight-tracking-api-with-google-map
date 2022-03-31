import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseData!: any;
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getData('it1110');
  }

  getData(id: any): void{
    console.log(id);
    this.courseService.getCourse(id).subscribe(data => this.courseData = JSON.stringify(data[0],null,2));
  }

}
