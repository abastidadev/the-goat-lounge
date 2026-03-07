import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslocoPipe, RouterLink],
  template: `
    <div class="min-h-screen flex flex-col items-center justify-center gap-2 p-2">
      <div class="text-center max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-2">
          {{ 'pages.contact.title' | transloco }}
        </h1>
        <div class="p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
          <p class="text-lg text-gray-600 dark:text-gray-300">
            {{ 'pages.contact.placeholder' | transloco }}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {{ 'pages.contact.info' | transloco }}
          </p>
        </div>

        <div class="mt-2">
          <a
            routerLink="/"
            class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
          >
            ← {{ 'shared.nav.home' | transloco }}
          </a>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}