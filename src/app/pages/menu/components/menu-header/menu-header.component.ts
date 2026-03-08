import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { MenuTab } from '../../domain/menu-tab.model';

interface TabConfig {
  id: MenuTab;
  icon: string;
  labelKey: string;
}

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './menu-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuHeaderComponent {
  // Inputs
  readonly activeTab = input.required<MenuTab>();

  // Outputs
  readonly tabChange = output<MenuTab>();

  // Data
  protected readonly tabs: TabConfig[] = [
    { id: MenuTab.Cachimbas, icon: '💨', labelKey: 'pages.menu.tabs.cachimbas' },
    { id: MenuTab.Sabores, icon: '🌿', labelKey: 'pages.menu.tabs.sabores' },
    { id: MenuTab.Bebidas, icon: '🍺', labelKey: 'pages.menu.tabs.bebidas' },
    { id: MenuTab.Cocteles, icon: '🍹', labelKey: 'pages.menu.tabs.cocteles' },
    { id: MenuTab.Comida, icon: '🍴', labelKey: 'pages.menu.tabs.comida' },
  ];

  // Computed
  protected readonly tabClasses = computed(() => (tabId: MenuTab) => {
    const base = 'px-3 py-1.5 md:px-4 md:py-2 rounded-md font-bold uppercase text-sm tracking-wide transition-all whitespace-nowrap';
    const active = 'bg-gold-500 text-black shadow-lg shadow-gold-500/50';
    const inactive = 'bg-neutral-900 text-gray-300 hover:bg-neutral-800 hover:text-gold-400 border border-gold-500/20';
    
    return `${base} ${this.activeTab() === tabId ? active : inactive}`;
  });

  protected onTabClick(tabId: MenuTab): void {
    this.tabChange.emit(tabId);
  }
}
