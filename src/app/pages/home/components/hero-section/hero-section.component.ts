import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  // Outputs
  readonly scrollToSection = output<string>();
}
