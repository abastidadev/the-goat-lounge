import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  computed,
  HostListener,
} from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { EssenceSectionComponent } from './components/essence-section/essence-section.component';
import { ShishaSectionComponent } from './components/shisha-section/shisha-section.component';
import { LocationSectionComponent } from './components/location-section/location-section.component';
import { FooterComponent } from './components/footer/footer.component';

interface NavItem {
  key: string;
  type: 'scroll' | 'route';
}

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
  private readonly router = inject(Router);

  // Signals
  protected readonly currentLang = signal<string>(this.transloco.getActiveLang());
  protected readonly scrollY = signal(0);
  protected readonly mobileMenuOpen = signal(false);

  // Computed
  protected readonly isScrolled = computed(() => this.scrollY() > 50);

  // Data
  protected readonly navItems: NavItem[] = [
    { key: 'shisha', type: 'scroll' },
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

  protected scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    this.mobileMenuOpen.set(false);
  }

  protected navigateToRoute(route: string): void {
    this.router.navigate(['/' + route]);
  }
}
