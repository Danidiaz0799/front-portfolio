import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * Projects component
 * Displays portfolio projects in a grid layout
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  /**
   * Constructor
   */
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Array of projects to display
   */
  projects = [
    {
      id: 1,
      title: 'SpeedyTools Cloud (Amaris Consulting - Telefónica)',
      description: '🔹 Migración y optimización de plataforma empresarial en Angular y .NET.\n🔹 Desarrollo de arquitectura modular, mejoras UX/UI y creación de REST API seguras y escalables.',
      image: 'assets/images/projects/project1.jpg',
      technologies: ['Angular', '.NET', 'Azure', 'REST API', 'SQL Server'],
      category: 'Full Stack',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: 2,
      title: 'NABIS (Amaris Consulting - Telefónica)',
      description: '🔹 Desarrollo y mantenimiento de soluciones empresariales con Angular y .NET Core.\n🔹 Implementación de CI/CD en Azure DevOps, aplicando SOLID y Clean Architecture.',
      image: 'assets/images/projects/project2.jpg',
      technologies: ['Angular', '.NET Core', 'Azure DevOps', 'CI/CD', 'Clean Architecture'],
      category: 'Full Stack',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: 3,
      title: 'BookingSystem (Inchcape Digital)',
      description: '🔹 Desarrollo de servicios backend en .NET Core y C#.\n🔹 Implementación de arquitecturas escalables y microservicios.\n🔹 Integración de APIs de terceros y optimización de consultas SQL.',
      image: 'assets/images/projects/project1.jpg',
      technologies: ['.NET Core', 'C#', 'SQL Server', 'Microservicios', 'APIs'],
      category: 'Backend',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: 4,
      title: 'Sistema Monitoreo IoT (Cultivo Setas)',
      description: '🔹 Plataforma de monitoreo en tiempo real con Angular, .NET y Azure.\n🔹 Integración con sensores IoT (ESP32, Raspberry Pi).\n🔹 Comunicación MQTT con Python.',
      image: 'assets/images/projects/project2.jpg',
      technologies: ['Angular', '.NET', 'Python', 'Azure', 'IoT', 'MQTT'],
      category: 'Full Stack',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: 5,
      title: 'Portfolio Personal',
      description: 'Mi sitio web de portafolio personal desarrollado con Angular 17, TypeScript y Tailwind CSS. Presenta un diseño moderno, responsive y funcional.',
      image: 'assets/images/projects/project1.jpg',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'SCSS'],
      category: 'Frontend',
      demoUrl: '/',
      sourceUrl: 'https://github.com/Danidiaz0799/front-portfolio'
    }
  ];

  /**
   * Categories for filtering projects
   */
  categories = ['All', 'Full Stack', 'Backend', 'Frontend'];

  /**
   * Currently selected category for filtering
   */
  selectedCategory = 'All';

  /**
   * Formats project description, converting newlines to <br> tags
   * @param description Project description text
   * @returns Formatted HTML
   */
  formatDescription(description: string): SafeHtml {
    const formattedText = description.replace(/\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(formattedText);
  }

  /**
   * Filters projects based on selected category
   * @returns Filtered array of projects
   */
  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  /**
   * Sets the selected category for filtering
   * @param category Category to filter by
   */
  setCategory(category: string): void {
    this.selectedCategory = category;
  }
}
