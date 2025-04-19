import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  // Featured projects
  featuredProjects = [
    {
      title: 'SpeedyTools Cloud',
      description: 'Migración y optimización de plataforma empresarial en Angular y .NET. Desarrollo de arquitectura modular, mejoras UX/UI y creación de REST API seguras y escalables.',
      tags: ['Angular', '.NET', 'Azure', 'REST API'],
      imageUrl: 'assets/images/projects/project1.jpg'
    },
    {
      title: 'NABIS',
      description: 'Desarrollo y mantenimiento de soluciones empresariales con Angular y .NET Core. Implementación de CI/CD en Azure DevOps, aplicando SOLID y Clean Architecture.',
      tags: ['Angular', '.NET Core', 'Azure DevOps', 'CI/CD'],
      imageUrl: 'assets/images/projects/project2.jpg'
    }
  ];
} 