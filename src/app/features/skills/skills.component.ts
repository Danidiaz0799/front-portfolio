import { Component } from '@angular/core';

/**
 * Skills component
 * Displays professional skills categorized
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  /**
   * Skill categories with their respective skills
   */
  skillCategories = [
    {
      name: 'Frontend',
      icon: 'code',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 75 },
        { name: 'Vue.js', level: 70 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      name: 'Backend',
      icon: 'server',
      skills: [
        { name: '.NET Core', level: 90 },
        { name: 'C#', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'NestJS', level: 75 },
        { name: 'Express.js', level: 80 },
        { name: 'Spring Boot', level: 70 },
        { name: 'Python', level: 85 }
      ]
    },
    {
      name: 'Bases de Datos',
      icon: 'database',
      skills: [
        { name: 'SQL Server', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 85 }
      ]
    },
    {
      name: 'DevOps & Cloud',
      icon: 'cloud',
      skills: [
        { name: 'Azure', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'Git', level: 95 },
        { name: 'GitHub', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 75 }
      ]
    },
    {
      name: 'Otros',
      icon: 'tools',
      skills: [
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 80 },
        { name: 'Microservicios', level: 85 },
        { name: 'Seguridad en Web', level: 80 }
      ]
    }
  ];

  /**
   * Calculate the width percentage for a skill bar based on level
   * @param level Skill proficiency level (0-100)
   * @returns CSS width value as a string
   */
  getSkillLevelWidth(level: number): string {
    return `${level}%`;
  }
}
