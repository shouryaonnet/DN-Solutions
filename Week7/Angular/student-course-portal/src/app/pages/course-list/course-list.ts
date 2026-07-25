import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  selectedCourseId: number | null = null;

  courses = [

    {
      id:1,
      name:'Angular',
      code:'ANG101',
      credits:4
    },

    {
      id:2,
      name:'React',
      code:'RCT102',
      credits:3
    },

    {
      id:3,
      name:'Spring Boot',
      code:'SPR201',
      credits:5
    },

    {
      id:4,
      name:'Java',
      code:'JAVA301',
      credits:4
    },

    {
      id:5,
      name:'Python',
      code:'PY401',
      credits:2
    }

  ];

  onEnroll(courseId:number){

    console.log("Enrolling in course:",courseId);

    this.selectedCourseId = courseId;

  }

}