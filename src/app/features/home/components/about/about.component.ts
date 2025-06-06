import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ContactItem {
  icon: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  // Contact information
  contactInfo: ContactItem[] = [
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      label: 'Ubicación',
      value: 'Bogotá, Colombia'
    },
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      label: 'Correo Electrónico',
      value: 'Danidiaz0799@gmail.com'
    },
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      label: 'Teléfono',
      value: '(+57) 3215460960'
    }
  ];

  /**
   * Generates the appropriate href for a contact item.
   * Returns mailto: for email, tel: for phone (formatted), or null otherwise.
   */
  getContactHref(item: ContactItem): string | null {
    if (item.label === 'Correo Electrónico') {
      return 'mailto:' + item.value;
    } else if (item.label === 'Teléfono') {
      // Remove parentheses, spaces, and keep the '+' if present
      const phoneNumber = item.value.replace(/[\s()]/g, ''); 
      return 'tel:' + phoneNumber;
    }
    return null; // Return null for items that shouldn't be links (like Location)
  }

  /**
   * Determines if a contact item should be a clickable link.
   */
  isClickable(item: ContactItem): boolean {
    return item.label === 'Correo Electrónico' || item.label === 'Teléfono';
  }
} 