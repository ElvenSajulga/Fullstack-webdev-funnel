import { Component, HostListener, signal } from '@angular/core';
import { LucideAngularModule, FolderOpen, Mail, ChevronDown, Sparkles } from 'lucide-angular';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

// [COMPONENT: HeroComponent] — Full-screen immersive intro with parallax blobs.
@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, RevealOnScrollDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  // [PROPERTY: icons] — Swap CTA / accent icons here.
  readonly FolderOpenIcon = FolderOpen;
  readonly MailIcon = Mail;
  readonly ChevronDownIcon = ChevronDown;
  readonly SparklesIcon = Sparkles;

  // [PROPERTY: scrollY] — Drives the parallax transform on the background blobs.
  readonly scrollY = signal(0);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrollY.set(window.scrollY);
  }

  // Smooth-scroll helper for the CTA buttons and the scroll-down chevron.
  scrollTo(id: string, event: Event): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
