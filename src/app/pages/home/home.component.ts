import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslocoPipe, RouterLink],
  template: `
    <div class="min-h-screen flex flex-col items-center justify-center gap-2 p-2">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold mb-2">
          {{ 'general.applicationName' | transloco }}
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
          {{ 'general.tagline' | transloco }}
        </p>
        <p class="text-lg text-gray-500 dark:text-gray-400 mb-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
          {{ 'pages.home.placeholder' | transloco }}
        </p>

        <div class="flex flex-col sm:flex-row gap-2 justify-center mt-2">
          <a
            routerLink="/menu"
            class="px-2 py-1 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
          >
            {{ 'shared.actions.viewMenu' | transloco }}
          </a>
          <a
            routerLink="/contact"
            class="px-2 py-1 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
          >
            {{ 'shared.actions.getInTouch' | transloco }}
          </a>
        </div>

        <div class="mt-2 flex gap-2 justify-center">
          <button
            (click)="changeLang('es')"
            [class]="langButtonClasses('es')"
          >
            {{ 'general.languages.es' | transloco }}
          </button>
          <button
            (click)="changeLang('en')"
            [class]="langButtonClasses('en')"
          >
            {{ 'general.languages.en' | transloco }}
          </button>
        </div>
      </div>

      <nav class="mt-2 flex gap-2">
        <a
          routerLink="/"
          class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {{ 'shared.nav.home' | transloco }}
        </a>
        <span class="text-gray-400">|</span>
        <a
          routerLink="/menu"
          class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {{ 'shared.nav.menu' | transloco }}
        </a>
        <span class="text-gray-400">|</span>
        <a
          routerLink="/contact"
          class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {{ 'shared.nav.contact' | transloco }}
        </a>
      </nav>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly transloco = inject(TranslocoService);
  protected readonly currentLang = signal<string>(this.transloco.getActiveLang());

  protected changeLang(lang: string): void {
    this.transloco.setActiveLang(lang);
    this.currentLang.set(lang);
  }

  protected langButtonClasses(lang: string): string {
    const base = 'px-2 py-1 rounded-md transition-colors text-sm';
    const active = 'bg-primary-600 text-white';
    const inactive =
      'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700';

    return `${base} ${this.currentLang() === lang ? active : inactive}`;
  }
}