import { Component } from '@angular/core';
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
  introText = 'Desarrollador Full Stack con más de 5 años de experiencia en el diseño, desarrollo e implementación de aplicaciones web escalables y de alto rendimiento.';
  
  /**
   * List of primary tech skills to showcase
   */
  techSkills = ['Angular', '.NET Core', 'TypeScript', 'C#', 'Python', 'Azure', 'SQL Server', 'MongoDB'];
}
