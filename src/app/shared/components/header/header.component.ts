import { Component, ChangeDetectionStrategy, input, output, computed, inject, effect } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { NavigationService, type NavItem } from '../../services/navigation.service';
import { filter } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly navigationService = inject(NavigationService);
  private readonly router = inject(Router);

  // Inputs
  readonly isScrolled = input.required<boolean>();
  readonly currentLang = input.required<string>();
  readonly mobileMenuOpen = input.required<boolean>();
  readonly navItems = input.required<NavItem[]>();

  // Outputs
  readonly changeLang = output<string>();
  readonly toggleMobileMenu = output<void>();

  // Track navigation events
  private readonly navigationEnd$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)
  );
  
  private readonly navigationEndSignal = toSignal(this.navigationEnd$);

  // Computed - Current route for active state
  protected readonly currentRoute = computed(() => {
    // Trigger recomputation on navigation
    this.navigationEndSignal();
    
    const url = this.router.url.split('?')[0].split('#')[0];
    if (url === '/' || url === '') return 'shisha';
    if (url.startsWith('/menu') || url.startsWith('/carta')) return 'carta';
    if (url.startsWith('/contact') || url.startsWith('/contacto')) return 'contacto';
    return '';
  });

  // Computed
  protected readonly headerClasses = computed(() => {
    const base = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300';
    const scrolled = this.isScrolled()
      ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-gold-500/20'
      : 'bg-transparent';
    return `${base} ${scrolled}`;
  });

  protected langButtonClasses(lang: string): string {
    const base = 'px-2 py-1 rounded-md transition-colors text-xs font-bold uppercase';
    const active = 'bg-gold-500 text-black';
    const inactive = 'bg-transparent text-gray-400 hover:text-gold-400';
    return `${base} ${this.currentLang() === lang ? active : inactive}`;
  }

  protected navButtonClasses(item: NavItem): string {
    const base = 'text-sm font-medium transition-colors tracking-wide uppercase pb-1';
    const isActive = this.currentRoute() === item.key;
    const colorClasses = isActive 
      ? 'text-gold-400 border-b-2 border-gold-500' 
      : 'text-gray-300 hover:text-gold-400 border-b-2 border-transparent';
    return `${base} ${colorClasses}`;
  }

  protected handleNavClick(item: NavItem): void {
    this.navigationService.navigateTo(item);
  }

  protected handleMobileNavClick(item: NavItem): void {
    this.navigationService.navigateTo(item);
    this.toggleMobileMenu.emit();
  }

  protected navigateToHome(): void {
    this.navigationService.navigateTo({ key: 'shisha', type: 'route' });
  }
}
