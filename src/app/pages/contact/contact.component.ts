import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  computed,
  HostListener,
} from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderComponent } from '../home/components/header/header.component';
import { FooterComponent } from '../home/components/footer/footer.component';

interface NavItem {
  key: string;
  type: 'scroll' | 'route';
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslocoPipe, ReactiveFormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private readonly transloco = inject(TranslocoService);
  private readonly router = inject(Router);

  // Signals for Header
  protected readonly currentLang = signal<string>(this.transloco.getActiveLang());
  protected readonly scrollY = signal(0);
  protected readonly mobileMenuOpen = signal(false);
  protected readonly isScrolled = computed(() => this.scrollY() > 50);

  // Signals for Form
  protected readonly isSubmitting = signal(false);
  protected readonly submitSuccess = signal(false);
  protected readonly submitError = signal<string | null>(null);

  // Form
  protected readonly contactForm: FormGroup;

  // Data for contact info
  protected readonly contactInfo = [
    { key: 'address', icon: '📍' },
    { key: 'hours', icon: '🕐' },
    { key: 'phone', icon: '📞' },
    { key: 'email', icon: '✉️' },
    { key: 'instagram', icon: '📱' },
  ];

  protected readonly subjectOptions = [
    { value: 'general', labelKey: 'general' },
    { value: 'reservation', labelKey: 'reservation' },
    { value: 'event', labelKey: 'event' },
    { value: 'other', labelKey: 'other' },
  ];

  // Data for Header
  protected readonly navItems: NavItem[] = [
    { key: 'shisha', type: 'route' },
    { key: 'carta', type: 'route' },
    { key: 'contacto', type: 'route' },
  ];

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['general', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrollY.set(window.scrollY);
  }

  // Header methods
  protected changeLang(lang: string): void {
    this.transloco.setActiveLang(lang);
    this.currentLang.set(lang);
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  protected scrollToSection(section: string): void {
    this.router.navigate(['/']);
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
    this.mobileMenuOpen.set(false);
  }

  protected navigateToRoute(route: string): void {
    if (route === 'contacto') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/' + route]);
    }
  }

  protected async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) return;

    this.isSubmitting.set(true);
    this.submitError.set(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      this.submitSuccess.set(true);
      this.contactForm.reset({ subject: 'general' });

      // Auto-hide success message after 5s
      setTimeout(() => this.submitSuccess.set(false), 5000);
    } catch (error) {
      this.submitError.set('Error al enviar el mensaje');
    } finally {
      this.isSubmitting.set(false);
    }
  }

  protected hasError(field: string, error: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control?.hasError(error) && control?.touched);
  }

  protected isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control?.invalid && control?.touched);
  }
}
