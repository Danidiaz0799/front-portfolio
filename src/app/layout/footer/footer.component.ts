import { Component } from '@angular/core';

/**
 * Footer component
 * Contains contact information, navigation and copyright
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  /**
   * Current year for copyright
   */
  currentYear = new Date().getFullYear();

  /**
   * Social media links (Update URLs)
   */
  socialLinks = [
    {
      url: 'https://www.linkedin.com/in/steven-diaz-salamanca-7b45b8241/', // Updated URL
      label: 'LinkedIn',
      icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4V9zM4 6.477A2.5 2.5 0 1 1 4 1.5a2.5 2.5 0 0 1 0 4.977z' // LinkedIn icon path (example)
    },
    {
      url: 'https://github.com/Danidiaz0799', // Updated URL
      label: 'GitHub',
      icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' // GitHub icon path (example)
    }
    // Add more social links if needed
  ];
}
