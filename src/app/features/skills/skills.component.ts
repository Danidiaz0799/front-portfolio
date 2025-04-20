import { Component } from '@angular/core';

interface Skill {
  name: string;
  // Removed level
}

interface SkillCategory {
  name: string;
  icon: string; // Keep icon path/name if used
  skills: Skill[];
}

/**
 * Skills component
 * Displays professional skills categorized
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  // Simplified skill categories, focusing on relevance
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', // Example icon path
      skills: [
        { name: 'Angular' }, { name: 'TypeScript' }, { name: 'JavaScript' }, { name: 'Tailwind CSS' }
        // Removed React, Vue.js for focus
      ]
    },
    {
      name: 'Backend',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01', // Example icon path
      skills: [
        { name: '.NET Core' }, { name: 'C#' }, { name: 'Python' }, { name: 'Node.js' }, { name: 'REST APIs' }
        // Removed NestJS, Express, Spring Boot for focus, added REST APIs here
      ]
    },
    {
      name: 'Bases de Datos',
      icon: 'M4 7v10m16-10v10M4 7a2 2 0 012-2h12a2 2 0 012 2M4 7a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2v-6a2 2 0 00-2-2m-4 5h.01M12 12h.01M8 12h.01', // Example icon path
      skills: [
        { name: 'SQL Server' }, { name: 'PostgreSQL' }, { name: 'MySQL' }, { name: 'MongoDB' } 
      ]
    },
    {
      name: 'DevOps & Cloud',
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z', // Example icon path
      skills: [
        { name: 'Azure' }, { name: 'Docker' }, { name: 'CI/CD' }, { name: 'Git & GitHub' } 
        // Merged Git/GitHub, removed Kubernetes for focus
      ]
    },
    {
      name: 'Metodologías y Arquitectura',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', // Example icon path
      skills: [
        { name: 'Clean Architecture' }, { name: 'SOLID' }, { name: 'Microservicios' }, { name: 'Scrum' } 
         // Merged Microservices here, removed Kanban/Agile for focus
      ]
    },
    // Removed 'Otros' category for simplification
  ];

  languages = [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Profesional' }
  ];

  softSkills = [
    'Resolución de problemas', 'Trabajo en equipo', 'Liderazgo técnico', 
    'Comunicación efectiva', 'Gestión del tiempo', 'Aprendizaje continuo', 
    'Adaptabilidad', 'Pensamiento analítico'
  ];

  // Removed getSkillLevelWidth method
}
