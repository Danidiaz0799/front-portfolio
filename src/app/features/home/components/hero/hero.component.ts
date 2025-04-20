import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  @Input() professionalTitle: string = '';
  @Input() introText: string = '';
  @Input() techSkills: string[] = [];
} 