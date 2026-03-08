import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface NavItem {
  key: string;
  type: 'scroll' | 'route';
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly router = inject(Router);
  private pendingScroll: string | null = null;

  constructor() {
    // Listen to route changes to handle pending scrolls
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.pendingScroll) {
          setTimeout(() => {
            this.scrollToSection(this.pendingScroll!);
            this.pendingScroll = null;
          }, 100);
        }
      });
  }

  /**
   * Navigate to a route or scroll to a section
   * Handles cross-page navigation intelligently
   */
  navigateTo(item: NavItem): void {
    if (item.type === 'route') {
      // Special handling for 'shisha' which represents home page
      const route = item.key === 'shisha' ? '/' : '/' + item.key;
      this.router.navigate([route]).then(() => {
        // Scroll to top after navigation
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    } else {
      // Scroll type - check if we're on home page
      const currentUrl = this.router.url.split('?')[0].split('#')[0];
      
      if (currentUrl === '/' || currentUrl === '') {
        // Already on home, just scroll
        this.scrollToSection(item.key);
      } else {
        // Navigate to home first, then scroll
        this.pendingScroll = item.key;
        this.router.navigate(['/'], { fragment: item.key });
      }
    }
  }

  /**
   * Scroll to a section with offset for fixed header
   */
  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  /**
   * Direct navigation to a route
   */
  navigateToRoute(route: string): void {
    this.router.navigate(['/' + route]);
  }

  /**
   * Direct scroll to section (only works if already on the page)
   */
  scrollToSectionDirect(sectionId: string): void {
    this.scrollToSection(sectionId);
  }
}
