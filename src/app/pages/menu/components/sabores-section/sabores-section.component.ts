import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import {
  SaborItem,
  FilterOption,
  FlavorType,
  Strength,
  Badge,
} from '../../domain/menu-item.model';
import { SABORES } from '../../domain/menu-data.mock';

@Component({
  selector: 'app-sabores-section',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './sabores-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaboresSectionComponent {
  // Filters
  protected readonly selectedFlavorType = signal<FlavorType | 'todos'>('todos');
  protected readonly selectedStrength = signal<Strength | 'todos'>('todos');

  // Data
  protected readonly sabores = signal<SaborItem[]>(SABORES as SaborItem[]);

  // Filter options
  protected readonly flavorTypeFilters: FilterOption[] = [
    new FilterOption('todos', 'pages.menu.filters.all', 'todos'),
    new FilterOption('frutal', 'pages.menu.filters.flavorTypes.frutal', FlavorType.Frutal),
    new FilterOption('mentolado', 'pages.menu.filters.flavorTypes.mentolado', FlavorType.Mentolado),
    new FilterOption('dulce', 'pages.menu.filters.flavorTypes.dulce', FlavorType.Dulce),
    new FilterOption('especiado', 'pages.menu.filters.flavorTypes.especiado', FlavorType.Especiado),
  ];

  protected readonly strengthFilters: FilterOption[] = [
    new FilterOption('todos', 'pages.menu.filters.all', 'todos'),
    new FilterOption('suave', 'pages.menu.filters.strengths.suave', Strength.Suave),
    new FilterOption('medio', 'pages.menu.filters.strengths.medio', Strength.Medio),
    new FilterOption('fuerte', 'pages.menu.filters.strengths.fuerte', Strength.Fuerte),
  ];

  // Computed
  protected readonly filteredSabores = computed(() => {
    let items = this.sabores();

    if (this.selectedFlavorType() !== 'todos') {
      items = items.filter((i) => i.flavorType === this.selectedFlavorType());
    }

    if (this.selectedStrength() !== 'todos') {
      items = items.filter((i) => i.strength === this.selectedStrength());
    }

    return items;
  });

  protected readonly badgeClasses = computed(() => (badge?: Badge) => {
    const base = 'absolute top-1 right-1 px-1 py-0.5 rounded-md text-xs font-bold uppercase tracking-wide';
    
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
  });

  // Methods
  protected formatPrice(price: number): string {
    return price > 0 ? `€${price.toFixed(2)}` : '';
  }
}
