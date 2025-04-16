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
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3/SCSS', level: 85 },
        { name: 'React', level: 75 },
        { name: 'Bootstrap', level: 90 }
      ]
    },
    {
      name: 'Backend',
      icon: 'server',
      skills: [
        { name: '.NET Core', level: 85 },
        { name: 'C#', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      name: 'Bases de Datos',
      icon: 'database',
      skills: [
        { name: 'SQL Server', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'Entity Framework', level: 80 }
      ]
    },
    {
      name: 'DevOps & Herramientas',
      icon: 'tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 70 },
        { name: 'Azure', level: 75 },
        { name: 'Visual Studio', level: 85 }
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
