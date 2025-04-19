import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * About component
 * Displays personal information, experience, and background
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  /**
   * Personal biography information
   */
  biography = {
    name: 'Steven Diaz',
    title: 'Full Stack Developer | Angular & .NET | Python & SQL',
    summary: 'Desarrollador Full Stack con más de 5 años de experiencia en el diseño, desarrollo e implementación de aplicaciones web escalables y de alto rendimiento. Especializado en Angular y .NET, con un enfoque en arquitectura limpia, buenas prácticas de desarrollo y metodologías ágiles (Scrum, Kanban). Me apasiona la optimización de código, el desarrollo eficiente y la creación de soluciones digitales innovadoras.'
  };

  /**
   * Professional experience 
   */
  experiences = [
    {
      position: 'Full Stack Developer',
      company: 'Amaris Consulting - Telefónica',
      period: 'Ene 2022 - Actualidad',
      description: 'Desarrollo y migración de plataformas empresariales usando Angular y .NET. Implementación de arquitecturas modulares, mejoras UX/UI y creación de servicios REST API. Proyectos principales: SpeedyTools Cloud y NABIS.'
    },
    {
      position: 'Backend Developer',
      company: 'Inchcape Digital',
      period: 'Mar 2020 - Dic 2021',
      description: 'Desarrollo de servicios backend en .NET Core y C#. Implementación de arquitecturas escalables y microservicios. Integración de APIs de terceros y optimización de consultas SQL para el sistema BookingSystem.'
    },
    {
      position: 'IoT & Full Stack Developer',
      company: 'Proyecto Independiente',
      period: 'Jun 2021 - Dic 2022',
      description: 'Desarrollo de plataforma de monitoreo en tiempo real con Angular, .NET y Azure. Integración con sensores IoT mediante ESP32 y Raspberry Pi. Implementación de comunicación MQTT con Python para cultivo de setas.'
    }
  ];

  /**
   * Education history - Updated based on new info
   */
  education = [
    {
      degree: 'Tecnólogo en Electrónica Industrial',
      institution: 'Universidad Distrital Francisco José de Caldas',
      period: 'Ene 2020 - Mar 2025 (Estimado)', // Adjusted period
      description: 'Formación en bases de electrónica y sistemas industriales.'
    },
    {
      degree: 'Diplomado en Desarrollo de Aplicaciones Móviles',
      institution: 'Universidad Nacional de Colombia (UNAL)',
      period: 'May 2024 - Sep 2024',
      description: 'Énfasis en desarrollo de aplicaciones web y móviles.'
    },
    {
      degree: 'Diplomado en Desarrollo Backend',
      institution: 'Universidad Distrital Francisco José de Caldas',
      period: 'Ene 2023 - Sep 2023',
      description: 'Enfoque en desarrollo de software y arquitecturas backend.'
    },
    {
      degree: 'Diplomado en Habilidades de Programación con énfasis en Desarrollo Web',
      institution: 'Universidad Tecnológica de Pereira',
      period: 'Ene 2022 - Dic 2022',
      description: 'Desarrollo de habilidades fundamentales para la programación y desarrollo web.'
    }
  ];

  /**
   * Certifications - Added based on new info
   */
  certifications = [
    {
      title: 'Azure Developer Associate (AZ-204)',
      issuer: 'Microsoft',
      date: '2023'
    },
    {
      title: 'Enterprise Application Architecture with .NET Core',
      issuer: 'Platzi', // Assuming issuer, adjust if needed
      date: '' // Add date if available
    },
    {
      title: 'Master in ASP.NET 7 - Entity Framework',
      issuer: 'Udemy', // Assuming issuer, adjust if needed
      date: '' // Add date if available
    },
    {
      title: 'Querying Microsoft SQL Server with Transact-SQL',
      issuer: 'Platzi', // Assuming issuer, adjust if needed
      date: '' // Add date if available
    },
    {
      title: 'Aspectos básicos del diseño de la experiencia del usuario',
      issuer: 'Google Activate', // Assuming issuer, adjust if needed
      date: '' // Add date if available
    },
    {
      title: 'API Testing with POSTMAN: Masterclass',
      issuer: 'Udemy', // Assuming issuer, adjust if needed
      date: '' // Add date if available
    }
  ];

  /**
   * Detailed Tech Stack
   */
  techStack = {
    frontend: ['Angular', 'TypeScript', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS'],
    backend: ['.NET Core', 'C#', 'Python', 'Node.js', 'NestJS', 'Express.js', 'Spring Boot'],
    databases: ['SQL Server', 'MySQL', 'MongoDB', 'PostgreSQL'],
    devops: ['Azure', 'CI/CD', 'Git', 'GitHub', 'Docker', 'Kubernetes'],
    other: ['REST APIs', 'GraphQL', 'Microservicios', 'Web Security'],
    methodologies: ['Scrum', 'Kanban', 'Clean Architecture', 'SOLID']
  };
}
