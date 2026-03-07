import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';

interface NavItem {
  key: string;
  type: 'scroll' | 'route';
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  // Inputs
  readonly isScrolled = input.required<boolean>();
  readonly currentLang = input.required<string>();
  readonly mobileMenuOpen = input.required<boolean>();
  readonly navItems = input.required<NavItem[]>();

  // Outputs
  readonly scrollToSection = output<string>();
  readonly navigateToRoute = output<string>();
  readonly changeLang = output<string>();
  readonly toggleMobileMenu = output<void>();

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

  protected handleNavClick(item: NavItem): void {
    if (item.type === 'scroll') {
      this.scrollToSection.emit(item.key);
    } else {
      this.navigateToRoute.emit(item.key);
    }
  }

  protected handleMobileNavClick(item: NavItem): void {
    this.handleNavClick(item);
    this.toggleMobileMenu.emit();
  }
}
