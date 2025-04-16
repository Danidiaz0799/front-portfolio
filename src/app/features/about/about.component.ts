import { Component } from '@angular/core';

/**
 * About component
 * Displays personal information, experience, and background
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  /**
   * Personal biography information
   */
  biography = {
    name: 'Tu Nombre',
    title: 'Full Stack Developer',
    summary: 'Soy un desarrollador Full Stack apasionado, especializado en tecnologías Angular y .NET, con un fuerte enfoque en crear soluciones web escalables y de alto rendimiento. Con experiencia en el desarrollo frontend y backend, me especializo en crear aplicaciones web modernas y responsivas que ofrecen experiencias de usuario excepcionales.'
  };

  /**
   * Professional experience 
   */
  experiences = [
    {
      position: 'Full Stack Developer',
      company: 'Empresa Tecnológica',
      period: 'Enero 2023 - Presente',
      description: 'Desarrollo de aplicaciones web utilizando Angular y .NET Core. Implementación de arquitecturas escalables y mantenimiento de bases de datos SQL Server.'
    },
    {
      position: 'Frontend Developer',
      company: 'Agencia Digital',
      period: 'Marzo 2021 - Diciembre 2022',
      description: 'Desarrollo de interfaces de usuario con Angular. Colaboración con equipos de diseño para implementar experiencias de usuario atractivas y funcionales.'
    }
  ];

  /**
   * Education history
   */
  education = [
    {
      degree: 'Ingeniería en Sistemas Computacionales',
      institution: 'Universidad Tecnológica',
      period: '2017 - 2021',
      description: 'Especialización en desarrollo de software y sistemas informáticos.'
    },
    {
      degree: 'Certificación en Desarrollo Web',
      institution: 'Academia Online',
      period: '2020',
      description: 'Programa intensivo enfocado en tecnologías web modernas.'
    }
  ];

  /**
   * Personal skills beyond technical abilities
   */
  personalSkills = [
    'Resolución de problemas',
    'Trabajo en equipo',
    'Comunicación efectiva',
    'Gestión del tiempo',
    'Aprendizaje continuo',
    'Adaptabilidad'
  ];
}
