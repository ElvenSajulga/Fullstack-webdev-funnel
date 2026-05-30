import {
  afterNextRender,
  Component,
  DestroyRef,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import {
  LucideAngularModule,
  LucideIconData,
  Menu,
  X,
  Home,
  User,
  Layers,
  Briefcase,
  FolderOpen,
  MessageSquareQuote,
  Mail,
  CodeXml,
} from 'lucide-angular';

interface NavLink {
  id: string;
  label: string;
  icon: LucideIconData;
}

// [COMPONENT: NavbarComponent] — Sticky glass navbar with scroll-spy active link
// highlighting and a slide-in mobile drawer.
@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  // [PROPERTY: icons] — Add or swap Lucide icons here.
  readonly MenuIcon = Menu;
  readonly XIcon = X;
  readonly LogoIcon = CodeXml;

  // [PROPERTY: links] — The nav items. `id` must match a <section id="..."> on the page.
  // Duplicate an entry to add a nav link; reorder to reorder the menu.
  readonly links: NavLink[] = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Layers },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'portfolio', label: 'Work', icon: FolderOpen },
    { id: 'testimonials', label: 'Reviews', icon: MessageSquareQuote },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  readonly mobileOpen = signal(false);
  readonly scrolled = signal(false);
  readonly activeSection = signal<string>('hero');

  private observer?: IntersectionObserver;
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    // [METHOD: setupScrollSpy] runs once the page (and its sections) are rendered.
    afterNextRender(() => this.setupScrollSpy());
    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }

  // Toggle the navbar's solid glass background once the user scrolls past the top.
  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 16);
  }

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }

  // [METHOD: onNavClick] — Smooth-scroll to a section and close the mobile drawer.
  onNavClick(id: string, event: Event): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeSection.set(id);
    this.closeMobile();
  }

  // [METHOD: setupScrollSpy] — IntersectionObserver that flags the section crossing
  // the vertical middle of the viewport as active.
  private setupScrollSpy(): void {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    if (!sections.length) {
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((section) => this.observer!.observe(section));
  }
}
