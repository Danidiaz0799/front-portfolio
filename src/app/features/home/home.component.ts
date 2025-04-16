import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

/**
 * Home component for the portfolio landing page
 * This is the main entry point for visitors
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  /**
   * Professional title displayed in the hero section
   */
  professionalTitle = 'Full Stack Developer | Angular & .NET | Python';
  
  /**
   * Brief introduction for the hero section
   */
  introText = 'Full Stack Developer with over 5 years of experience in designing, developing, and implementing scalable and high-performance web applications.';
  
  /**
   * List of primary tech skills to showcase
   */
  techSkills = ['Angular', '.NET Core', 'TypeScript', 'C#', 'Python', 'Azure', 'SQL Server', 'MongoDB'];
}
