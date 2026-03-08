import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  computed,
  HostListener,
} from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuTab } from './domain/menu-tab.model';
import { CachimbasSectionComponent } from './components/cachimbas-section/cachimbas-section.component';
import { SaboresSectionComponent } from './components/sabores-section/sabores-section.component';
import { BebidasSectionComponent } from './components/bebidas-section/bebidas-section.component';
import { CoctelesSectionComponent } from './components/cocteles-section/cocteles-section.component';
import { ComidaSectionComponent } from './components/comida-section/comida-section.component';
import { type NavItem } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MenuHeaderComponent,
    CachimbasSectionComponent,
    SaboresSectionComponent,
    BebidasSectionComponent,
    CoctelesSectionComponent,
    ComidaSectionComponent,
  ],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  private readonly transloco = inject(TranslocoService);

  // Expose enum for template
  protected readonly MenuTab = MenuTab;

  // State
  protected readonly activeTab = signal<MenuTab>(MenuTab.Cachimbas);
  protected readonly currentLang = signal(this.transloco.getActiveLang());
  protected readonly scrollY = signal(0);
  protected readonly mobileMenuOpen = signal(false);

  // Computed
  protected readonly isScrolled = computed(() => this.scrollY() > 50);

  // Data
  protected readonly navItems: NavItem[] = [
    { key: 'shisha', type: 'route' },
    { key: 'carta', type: 'route' },
    { key: 'contacto', type: 'route' },
  ];

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrollY.set(window.scrollY);
  }

  // Methods
  protected setActiveTab(tab: MenuTab): void {
    this.activeTab.set(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  protected changeLang(lang: string): void {
    this.transloco.setActiveLang(lang);
    this.currentLang.set(lang);
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }
}
