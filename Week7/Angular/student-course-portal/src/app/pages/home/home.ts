import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  coursesAvailable = 12;

  ngOnInit(): void {

    console.log('HomeComponent initialized — courses loaded');

    setTimeout(() => {

      this.coursesAvailable = 12;

    },1000);

  }

  ngOnDestroy(): void {

    console.log('HomeComponent destroyed');

  }

  onEnrollClick(){

    this.message='Enrollment opened!';

  }

}