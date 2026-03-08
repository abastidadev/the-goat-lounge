import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { ComidaItem } from '../../domain/menu-item.model';
import { COMIDA } from '../../domain/menu-data.mock';

@Component({
  selector: 'app-comida-section',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './comida-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComidaSectionComponent {
  // Data
  protected readonly comida = signal<ComidaItem[]>(COMIDA as ComidaItem[]);

  // Methods
  protected formatPrice(price: number): string {
    return price > 0 ? `€${price.toFixed(2)}` : '';
  }

  protected getDietaryIcons(dietary?: string[]): string {
    if (!dietary || dietary.length === 0) return '';
    
    const icons: { [key: string]: string } = {
      'vegetarian': '🥬',
      'vegan': '🌱',
      'glutenFree': '🌾',
    };
    
    return dietary.map(d => icons[d] || '').join(' ');
  }
}
