import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * Projects component
 * Displays portfolio projects in a grid layout
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, CommonModule],
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
      description: '🔹 Migración y optimización de una plataforma empresarial consolidando tres soluciones en Angular + .NET.\n🔹 Desarrollo de una arquitectura modular con componentes reutilizables.\n🔹 Implementación de mejoras en UX/UI y optimización del rendimiento.\n🔹 Creación de servicios REST API con .NET para garantizar seguridad y escalabilidad.',
      image: 'assets/images/project-placeholder-1.jpg',
      technologies: ['Angular', '.NET Core', 'Azure', 'REST API', 'SQL Server'],
      category: 'Full Stack',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: 2,
      title: 'NABIS (Amaris Consulting - Telefónica)',
      description: '🔹 Desarrollo y mantenimiento de soluciones empresariales en Angular y .NET Core.\n🔹 Implementación de CI/CD en Azure DevOps para automatización de despliegues.\n🔹 Aplicación de principios SOLID y Clean Architecture.\n🔹 Creación de componentes reutilizables para mejorar la mantenibilidad del código.',
      image: 'assets/images/project-placeholder-2.jpg',
      technologies: ['Angular', '.NET Core', 'Azure DevOps', 'CI/CD', 'Clean Architecture'],
      category: 'Full Stack',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: 3,
      title: 'BookingSystem (Inchcape Digital)',
      description: '🔹 Desarrollo de servicios backend en .NET Core y C#.\n🔹 Implementación de arquitecturas escalables y microservicios.\n🔹 Integración de APIs de terceros y optimización de consultas SQL.',
      image: 'assets/images/project-placeholder-3.jpg',
      technologies: ['.NET Core', 'C#', 'SQL Server', 'Microservicios', 'APIs'],
      category: 'Backend',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: 4,
      title: 'Sistema de Monitoreo IoT para Cultivo de Setas',
      description: '🔹 Desarrollo de una plataforma de monitoreo en tiempo real con Angular, .NET y Azure.\n🔹 Integración con sensores de temperatura y humedad mediante ESP32 y Raspberry Pi.\n🔹 Uso de MQTT y Python para la comunicación entre dispositivos IoT.',
      image: 'assets/images/project-placeholder-4.jpg',
      technologies: ['Angular', '.NET Core', 'Python', 'Azure', 'IoT', 'MQTT', 'Raspberry Pi'],
      category: 'Full Stack',
      demoUrl: '#',
      sourceUrl: '#'
    },
    {
      id: 5,
      title: 'Portfolio Personal',
      description: 'Sitio web de portafolio personal desarrollado con Angular y Tailwind CSS. Presenta un diseño moderno, responsive y accesible que muestra mis proyectos y habilidades profesionales.',
      image: 'assets/images/project-placeholder-5.jpg',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'SCSS'],
      category: 'Frontend',
      demoUrl: '#',
      sourceUrl: 'https://github.com/username/portfolio'
    }
  ];

  /**
   * Categories for filtering projects
   */
  categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

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
