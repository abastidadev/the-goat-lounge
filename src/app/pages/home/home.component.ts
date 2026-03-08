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
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { EssenceSectionComponent } from './components/essence-section/essence-section.component';
import { ShishaSectionComponent } from './components/shisha-section/shisha-section.component';
import { LocationSectionComponent } from './components/location-section/location-section.component';
import { type NavItem } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    EssenceSectionComponent,
    ShishaSectionComponent,
    LocationSectionComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly transloco = inject(TranslocoService);

  // Signals
  protected readonly currentLang = signal<string>(this.transloco.getActiveLang());
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

  protected changeLang(lang: string): void {
    this.transloco.setActiveLang(lang);
    this.currentLang.set(lang);
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }
}
