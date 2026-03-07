import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [TranslocoPipe, RouterLink],
  template: `
    <div class="min-h-screen flex flex-col items-center justify-center gap-2 p-2">
      <div class="text-center max-w-2xl mx-auto">
        <h1 class="text-6xl font-bold mb-2 text-primary-600 dark:text-primary-400">404</h1>
        <h2 class="text-2xl font-semibold mb-2">
          {{ 'pages.notFound.title' | transloco }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-2">
          {{ 'pages.notFound.message' | transloco }}
        </p>

        <a
          routerLink="/"
          class="inline-block px-2 py-1 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
        >
          {{ 'pages.notFound.action' | transloco }}
        </a>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
