import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { NavigationService } from '../../../../shared/services/navigation.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  private readonly navigationService = inject(NavigationService);

  protected navigateToContact(): void {
    this.navigationService.navigateTo({ key: 'contacto', type: 'route' });
  }

  protected navigateToMenu(): void {
    this.navigationService.navigateTo({ key: 'carta', type: 'route' });
  }
}
