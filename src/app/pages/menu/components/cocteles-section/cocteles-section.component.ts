import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { CoctelItem, Badge } from '../../domain/menu-item.model';
import { COCTELES } from '../../domain/menu-data.mock';

@Component({
  selector: 'app-cocteles-section',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './cocteles-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoctelesSectionComponent {
  // Data
  protected readonly cocteles = signal<CoctelItem[]>(COCTELES as CoctelItem[]);

  // Methods
  protected formatPrice(price: number): string {
    return price > 0 ? `€${price.toFixed(2)}` : '';
  }

  protected getBadgeClasses(badge?: Badge): string {
    const base = 'absolute top-2 right-2 px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wide';
    
    switch (badge) {
      case Badge.Signature:
        return `${base} bg-gold-500 text-black shadow-lg shadow-gold-500/50`;
      case Badge.Premium:
        return `${base} bg-gold-600 text-white shadow-lg shadow-gold-600/50`;
      case Badge.New:
        return `${base} bg-green-500 text-white shadow-lg shadow-green-500/50`;
      case Badge.Popular:
        return `${base} bg-blue-500 text-white shadow-lg shadow-blue-500/50`;
      default:
        return '';
    }
  }
}
