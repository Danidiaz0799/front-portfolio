import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  // Proyectos destacados
  featuredProjects = [
    {
      title: 'SpeedyTools Cloud',
      description: 'Migración y optimización de una plataforma empresarial consolidando tres soluciones en Angular + .NET. Desarrollo de una arquitectura modular con componentes reutilizables.',
      tags: ['Angular', '.NET Core', 'Azure'],
      imagePlaceholder: true
    },
    {
      title: 'NABIS',
      description: 'Desarrollo y mantenimiento de soluciones empresariales en Angular y .NET Core. Implementación de CI/CD en Azure DevOps para automatización de despliegues.',
      tags: ['Angular', '.NET Core', 'Azure DevOps'],
      imagePlaceholder: true
    }
  ];
} 