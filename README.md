# THE GOAT LOUNGE

Modern website for **THE GOAT LOUNGE** - An upscale pub specializing in premium shishas (cachimbas) and craft cocktails.

## 🎯 Project Overview

THE GOAT LOUNGE is a web application built with Angular 20+ that showcases our upscale lounge experience, featuring:

- Premium shisha menu
- Craft cocktail selection
- Modern, elegant web presence
- Multi-language support (Spanish & English)
- Responsive design with dark mode

## 🛠️ Tech Stack

- **Frontend Framework:** Angular 20.x (standalone components)
- **Styling:** Tailwind CSS 3.x (utility-first)
- **Internationalization:** Transloco (i18n)
- **Language:** TypeScript 5.6+
- **Build Tool:** Angular CLI
- **Code Quality:** ESLint + Prettier
- **Version Control:** Git + GitHub

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** v20.x or higher
- **npm:** v10.x or higher (comes with Node.js)
- **Angular CLI:** v20.x

To install Angular CLI globally:

```bash
npm install -g @angular/cli@20
```

## 🚀 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/abastidadev/the-goat-lounge.git
cd the-goat-lounge
```

2. **Install dependencies:**

```bash
npm install
```

3. **Verify installation:**

```bash
ng version
```

## 🏃‍♂️ Development Server

Start the development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 📁 Project Structure

```
the-goat-lounge/
├── public/                     # Static assets
│   └── i18n/                   # Translation files
│       ├── es.json             # Spanish translations
│       └── en.json             # English translations
├── src/
│   ├── app/
│   │   ├── config/             # App configuration
│   │   │   └── transloco-loader.ts
│   │   ├── pages/              # Route pages (lazy-loaded)
│   │   │   ├── home/
│   │   │   ├── menu/
│   │   │   ├── contact/
│   │   │   └── not-found/
│   │   ├── app.component.ts    # Root component
│   │   ├── app.config.ts       # App configuration
│   │   └── app.routes.ts       # Route definitions
│   ├── styles.css              # Global Tailwind styles
│   ├── index.html              # HTML entry point
│   └── main.ts                 # Application bootstrap
├── .eslintrc.json              # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── angular.json                # Angular CLI configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies

```

## 🧩 Architecture Principles

### Standalone Components

All components use Angular 20's standalone architecture (no NgModules):

```typescript
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, TranslocoPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
```

### Signal-Based Reactivity

Components use Angular signals for reactive state management:

```typescript
protected readonly currentLang = signal<string>('es');
```

### Lazy Loading

All routes are lazy-loaded for optimal performance:

```typescript
{
  path: 'menu',
  loadComponent: () => import('./pages/menu/menu.component').then(m => m.MenuComponent)
}
```

### Tailwind-First Styling

- **NO CSS/SCSS files** - All styling uses Tailwind utility classes
- **Default spacing:** `gap-2`, `p-1`, `p-2`, `rounded-md`
- **Dark mode:** All colors include `dark:` variants

### OnPush Change Detection

All components use `ChangeDetectionStrategy.OnPush` for optimal performance and zoneless compatibility.

## 🌍 Internationalization

The app supports multiple languages using Transloco:

- **Default Language:** Spanish (es)
- **Available Languages:** Spanish (es), English (en)

Translation files are located in `public/i18n/`:
- `es.json` - Spanish translations
- `en.json` - English translations

### Translation Structure

```json
{
  "shared": { /* Shared components */ },
  "general": { /* App-wide terms */ },
  "pages": { /* Page-specific content */ }
}
```

## 🎨 Styling Guidelines

### Tailwind CSS Conventions

- Use utility classes directly in templates
- Follow project spacing standards:
  - Gap: `gap-2` (8px)
  - Padding: `p-1` (4px) or `p-2` (8px)
  - Rounded: `rounded-md` (default)
- Always include dark mode variants: `dark:bg-gray-900`

### Example Component Styling

```html
<div class="flex flex-col gap-2 p-2 bg-white dark:bg-gray-900 rounded-md">
  <h1 class="text-2xl font-bold">Title</h1>
  <p class="text-gray-600 dark:text-gray-300">Content</p>
</div>
```

## 🧪 Code Quality

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

### Formatting

Format code with Prettier:

```bash
npm run format
```

Check formatting without making changes:

```bash
npm run format:check
```

### Pre-commit Checklist

Before committing, ensure:
1. ✅ No ESLint errors (`npm run lint`)
2. ✅ Code is formatted (`npm run format`)
3. ✅ App runs without errors (`npm start`)

## 📦 Build

Build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## 🗺️ Planned Features (Future Phases)

### Phase 2: Layout & Navigation
- [ ] Header component with navigation
- [ ] Footer component with social links
- [ ] Responsive mobile menu

### Phase 3: Home Page
- [ ] Hero section with brand imagery
- [ ] Featured sections
- [ ] Call-to-action components

### Phase 4: Menu Pages
- [ ] Shisha menu with categories
- [ ] Cocktail menu with filters
- [ ] Menu item detail views

### Phase 5: Contact & Location
- [ ] Contact form with validation
- [ ] Location map integration
- [ ] Opening hours display

### Phase 6: Additional Features
- [ ] Image gallery
- [ ] Events calendar
- [ ] Online reservations (if applicable)
- [ ] Customer reviews/testimonials

## 🤝 Contributing

This is a private project for THE GOAT LOUNGE. If you're part of the development team:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Follow conventional commit messages: `feat(scope): description`
3. Ensure all code passes linting and formatting
4. Submit a pull request for review

### Branch Naming Convention

- `task/ID-description` - Regular tasks
- `feature/ID-description` - New features
- `bug/ID-description` - Bug fixes
- `hotfix/ID-description` - Critical fixes

### Commit Message Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Examples:**
- `feat(menu): add shisha menu component`
- `fix(nav): resolve mobile menu toggle`
- `docs(readme): update installation steps`

## 📝 License

MIT License - See LICENSE file for details.

## 📧 Contact

**THE GOAT LOUNGE**

For inquiries about the lounge or website, please contact the development team.

---

**Current Status:** Phase 1 Complete ✅
- ✅ GitHub repository created
- ✅ Angular 20 project scaffolded
- ✅ Tailwind CSS integrated
- ✅ Basic routing configured
- ✅ ESLint & Prettier set up
- ✅ Transloco i18n configured
- ✅ Placeholder pages created

**Next Steps:** Proceed to Phase 2 - Layout & Navigation components
