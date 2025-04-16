import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Home component for the portfolio landing page
 * This is the main entry point for visitors
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /**
   * Professional title displayed in the hero section
   */
  professionalTitle = 'Full Stack Developer';
  
  /**
   * Brief introduction for the hero section
   */
  introText = 'Creating elegant solutions with Angular & .NET';
  
  /**
   * List of primary tech skills to showcase
   */
  techSkills = ['Angular', '.NET Core', 'SQL', 'TypeScript', 'C#', 'RESTful APIs'];
}
