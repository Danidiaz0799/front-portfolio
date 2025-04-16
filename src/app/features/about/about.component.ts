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
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  /**
   * Personal biography information
   */
  biography = {
    name: 'Daniel Díaz',
    title: 'Full Stack Developer | Angular & .NET | Python',
    summary: 'Desarrollador Full Stack con más de 5 años de experiencia en el diseño, desarrollo e implementación de aplicaciones web escalables y de alto rendimiento. Especializado en Angular y .NET, con un enfoque en arquitectura limpia, buenas prácticas de desarrollo y metodologías ágiles (Scrum, Kanban). Me apasiona la optimización de código, el desarrollo eficiente y la creación de soluciones digitales innovadoras.'
  };

  /**
   * Professional experience 
   */
  experiences = [
    {
      position: 'Full Stack Developer',
      company: 'Amaris Consulting - Telefónica',
      period: 'Enero 2022 - Presente',
      description: 'Desarrollo y migración de plataformas empresariales usando Angular y .NET. Implementación de arquitecturas modulares, mejoras UX/UI y creación de servicios REST API. Proyectos principales: SpeedyTools Cloud y NABIS.'
    },
    {
      position: 'Backend Developer',
      company: 'Inchcape Digital',
      period: 'Marzo 2020 - Diciembre 2021',
      description: 'Desarrollo de servicios backend en .NET Core y C#. Implementación de arquitecturas escalables y microservicios. Integración de APIs de terceros y optimización de consultas SQL para el sistema BookingSystem.'
    },
    {
      position: 'IoT & Full Stack Developer',
      company: 'Proyecto Independiente',
      period: 'Junio 2021 - Diciembre 2022',
      description: 'Desarrollo de plataforma de monitoreo en tiempo real con Angular, .NET y Azure. Integración con sensores IoT mediante ESP32 y Raspberry Pi. Implementación de comunicación MQTT con Python para cultivo de setas.'
    }
  ];

  /**
   * Education history
   */
  education = [
    {
      degree: 'Ingeniería de Sistemas',
      institution: 'Universidad Distrital Francisco José de Caldas',
      period: '2016 - 2021',
      description: 'Especialización en desarrollo de software y arquitecturas de sistemas.'
    },
    {
      degree: 'Certificación Azure Developer Associate',
      institution: 'Microsoft',
      period: '2023',
      description: 'Especialización en desarrollo e implementación de soluciones en la nube de Microsoft Azure.'
    },
    {
      degree: 'Certificación en Angular Development',
      institution: 'Google',
      period: '2022',
      description: 'Desarrollo avanzado de aplicaciones web con el framework Angular.'
    }
  ];

  /**
   * Personal skills beyond technical abilities
   */
  personalSkills = [
    'Resolución de problemas',
    'Trabajo en equipo',
    'Liderazgo técnico',
    'Comunicación efectiva',
    'Gestión del tiempo',
    'Aprendizaje continuo',
    'Adaptabilidad',
    'Pensamiento analítico'
  ];
}
