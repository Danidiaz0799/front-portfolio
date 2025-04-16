import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Footer component
 * Contains contact information, navigation and copyright
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  /**
   * Current year for copyright
   */
  currentYear = new Date().getFullYear();

  /**
   * Links for footer navigation
   */
  footerLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Sobre Mí' },
    { path: '/skills', label: 'Habilidades' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/contact', label: 'Contacto' }
  ];

  /**
   * Social media links
   */
  socialLinks = [
    { url: 'https://linkedin.com/', label: 'LinkedIn', icon: 'linkedin' },
    { url: 'https://github.com/', label: 'GitHub', icon: 'github' },
    { url: 'https://twitter.com/', label: 'Twitter', icon: 'twitter' }
  ];
}
