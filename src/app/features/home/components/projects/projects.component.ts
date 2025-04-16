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
      description: 'Migration and optimization of an enterprise platform consolidating three solutions in Angular + .NET. Development of a modular architecture with reusable components.',
      tags: ['Angular', '.NET Core', 'Azure'],
      imagePlaceholder: true
    },
    {
      title: 'NABIS',
      description: 'Development and maintenance of enterprise solutions in Angular and .NET Core. Implementation of CI/CD in Azure DevOps for deployment automation.',
      tags: ['Angular', '.NET Core', 'Azure DevOps'],
      imagePlaceholder: true
    }
  ];
} 