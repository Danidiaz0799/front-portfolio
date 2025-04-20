import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Page Not Found component
 * Displays a 404 error page
 */
@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent {
}
