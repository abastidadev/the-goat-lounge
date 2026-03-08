import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { NavigationService, type NavItem } from '../../services/navigation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly navigationService = inject(NavigationService);

  // Data
  protected readonly footerLinks: NavItem[] = [
    { key: 'shisha', type: 'route' },
    { key: 'carta', type: 'route' },
    { key: 'contacto', type: 'route' },
  ];

  protected handleNavClick(link: NavItem): void {
    this.navigationService.navigateTo(link);
  }
}
