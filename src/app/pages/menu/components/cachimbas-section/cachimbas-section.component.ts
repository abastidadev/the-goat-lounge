import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import {
  CachimbaItem,
  FilterOption,
  Origin,
  DrawType,
  Intensity,
  Badge,
} from '../../domain/menu-item.model';
import { CACHIMBAS } from '../../domain/menu-data.mock';

@Component({
  selector: 'app-cachimbas-section',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './cachimbas-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CachimbasSectionComponent {
  // Filters
  protected readonly selectedOrigin = signal<Origin | 'todos'>('todos');
  protected readonly selectedDrawType = signal<DrawType | 'todos'>('todos');
  protected readonly selectedIntensity = signal<Intensity | 'todos'>('todos');

  // Data
  protected readonly cachimbas = signal<CachimbaItem[]>(CACHIMBAS as CachimbaItem[]);

  // Filter options
  protected readonly originFilters: FilterOption[] = [
    new FilterOption('todos', 'pages.menu.filters.all', 'todos'),
    new FilterOption('alemania', 'pages.menu.filters.origins.alemania', Origin.Alemania),
    new FilterOption('egipto', 'pages.menu.filters.origins.egipto', Origin.Egipto),
    new FilterOption('espana', 'pages.menu.filters.origins.espana', Origin.Espana),
    new FilterOption('rusia', 'pages.menu.filters.origins.rusia', Origin.Rusia),
  ];

  protected readonly drawTypeFilters: FilterOption[] = [
    new FilterOption('todos', 'pages.menu.filters.all', 'todos'),
    new FilterOption('abierto', 'pages.menu.filters.drawTypes.abierto', DrawType.Abierto),
    new FilterOption('medio', 'pages.menu.filters.drawTypes.medio', DrawType.Medio),
    new FilterOption('cerrado', 'pages.menu.filters.drawTypes.cerrado', DrawType.Cerrado),
  ];

  protected readonly intensityFilters: FilterOption[] = [
    new FilterOption('todos', 'pages.menu.filters.all', 'todos'),
    new FilterOption('signature', 'pages.menu.filters.intensities.signature', Intensity.Signature),
    new FilterOption('premium', 'pages.menu.filters.intensities.premium', Intensity.Premium),
    new FilterOption('standard', 'pages.menu.filters.intensities.standard', Intensity.Standard),
  ];

  // Computed
  protected readonly filteredCachimbas = computed(() => {
    let items = this.cachimbas();

    if (this.selectedOrigin() !== 'todos') {
      items = items.filter((i) => i.origin === this.selectedOrigin());
    }

    if (this.selectedDrawType() !== 'todos') {
      items = items.filter((i) => i.drawType === this.selectedDrawType());
    }

    if (this.selectedIntensity() !== 'todos') {
      items = items.filter((i) => i.intensity === this.selectedIntensity());
    }

    return items;
  });

  protected readonly badgeClasses = computed(() => (badge?: Badge) => {
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
  });

  // Methods
  protected formatPrice(price: number): string {
    return price > 0 ? `€${price.toFixed(2)}` : '';
  }
}
