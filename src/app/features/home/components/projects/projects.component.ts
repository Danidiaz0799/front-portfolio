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
      description: 'Migración y optimización de plataforma empresarial consolidando tres soluciones en Angular + .NET. Desarrollo de arquitectura modular con componentes reutilizables.',
      tags: ['Angular', '.NET Core', 'Azure'],
      imageUrl: 'assets/images/projects/project1.jpg'
    },
    {
      title: 'NABIS',
      description: 'Desarrollo y mantenimiento de soluciones empresariales en Angular y .NET Core. Implementación de CI/CD en Azure DevOps para automatización de despliegues.',
      tags: ['Angular', '.NET Core', 'Azure DevOps'],
      imageUrl: 'assets/images/projects/project2.jpg'
    }
  ];
} 