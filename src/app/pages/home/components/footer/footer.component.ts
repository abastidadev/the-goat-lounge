import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

interface FooterLink {
  key: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  // Outputs
  readonly scrollToSection = output<string>();

  // Data
  protected readonly footerLinks: FooterLink[] = [
    { key: 'shisha' },
    { key: 'carta' },
    { key: 'contacto' },
  ];
}
