import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Projects component
 * Displays portfolio projects in a grid layout
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  /**
   * Array of projects to display
   */
  projects = [
    {
      id: 1,
      title: 'E-commerce Application',
      description: 'Aplicación de comercio electrónico completa desarrollada con Angular y .NET Core. Incluye autenticación de usuarios, catálogo de productos, carrito de compras y pasarela de pagos.',
      image: 'assets/images/project-placeholder-1.jpg',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Entity Framework', 'Bootstrap'],
      category: 'Full Stack',
      demoUrl: 'https://demo.example.com',
      sourceUrl: 'https://github.com/username/repo'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Panel de control para visualización de datos y análisis estadísticos. Presenta gráficos interactivos, informes personalizables y alertas en tiempo real.',
      image: 'assets/images/project-placeholder-2.jpg',
      technologies: ['Angular', 'TypeScript', 'Chart.js', 'RxJS', 'Material Design'],
      category: 'Frontend',
      demoUrl: 'https://demo.example.com',
      sourceUrl: 'https://github.com/username/repo'
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'Sistema de gestión de tareas y proyectos con funcionalidades de seguimiento de tiempo, asignación de responsabilidades y colaboración en equipo.',
      image: 'assets/images/project-placeholder-3.jpg',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'SignalR', 'Azure'],
      category: 'Full Stack',
      demoUrl: 'https://demo.example.com',
      sourceUrl: 'https://github.com/username/repo'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Sitio web de portafolio personal desarrollado con Angular. Presenta un diseño moderno, responsive y accesible.',
      image: 'assets/images/project-placeholder-4.jpg',
      technologies: ['Angular', 'SCSS', 'TypeScript', 'Animation'],
      category: 'Frontend',
      demoUrl: 'https://demo.example.com',
      sourceUrl: 'https://github.com/username/repo'
    },
    {
      id: 5,
      title: 'RESTful API Service',
      description: 'API RESTful desarrollada con .NET Core para gestión de recursos con autenticación JWT, documentación Swagger y persistencia de datos.',
      image: 'assets/images/project-placeholder-5.jpg',
      technologies: ['.NET Core', 'C#', 'REST API', 'Swagger', 'JWT'],
      category: 'Backend',
      demoUrl: 'https://demo.example.com',
      sourceUrl: 'https://github.com/username/repo'
    },
    {
      id: 6,
      title: 'Social Media Application',
      description: 'Aplicación de red social con perfiles de usuario, publicaciones, comentarios y mensajería en tiempo real.',
      image: 'assets/images/project-placeholder-6.jpg',
      technologies: ['Angular', '.NET Core', 'SignalR', 'Entity Framework', 'SQL Server'],
      category: 'Full Stack',
      demoUrl: 'https://demo.example.com',
      sourceUrl: 'https://github.com/username/repo'
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
