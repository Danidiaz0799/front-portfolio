import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * Header component
 * Main navigation for the portfolio
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  /**
   * Flag to track mobile menu state
   */
  isMenuOpen = false;

  /**
   * Navigation links for the header
   */
  navLinks = [
    { path: '/', label: 'Inicio', exact: true },
    { path: '/about', label: 'Sobre Mí', exact: false },
    { path: '/skills', label: 'Habilidades', exact: false },
    { path: '/projects', label: 'Proyectos', exact: false },
    { path: '/contact', label: 'Contacto', exact: false }
  ];

  /**
   * Toggle mobile menu
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Close mobile menu
   */
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
