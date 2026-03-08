import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { BebidaItem, DrinkType } from '../../domain/menu-item.model';
import { BEBIDAS } from '../../domain/menu-data.mock';

@Component({
  selector: 'app-bebidas-section',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './bebidas-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BebidasSectionComponent {
  // Data
  protected readonly bebidas = signal<BebidaItem[]>(BEBIDAS as BebidaItem[]);

  // Computed - grouped by drink type
  protected readonly cervezas = computed(() => 
    this.bebidas().filter(b => b.drinkType === DrinkType.Cerveza)
  );

  protected readonly refrescos = computed(() => 
    this.bebidas().filter(b => b.drinkType === DrinkType.Refresco)
  );

  protected readonly tes = computed(() => 
    this.bebidas().filter(b => b.drinkType === DrinkType.Te)
  );

  protected readonly agua = computed(() => 
    this.bebidas().filter(b => b.drinkType === DrinkType.Agua)
  );

  // Methods
  protected formatPrice(price: number): string {
    return price > 0 ? `€${price.toFixed(2)}` : '';
  }
}
