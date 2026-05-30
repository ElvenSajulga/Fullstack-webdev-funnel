import { Component } from '@angular/core';
import { LucideAngularModule, LucideIconData, Github, Linkedin, Mail, CodeXml, ArrowUp } from 'lucide-angular';

interface FooterLink {
  id: string;
  label: string;
}

interface FooterSocial {
  icon: LucideIconData;
  label: string;
  url: string;
}

// [COMPONENT: FooterComponent] — Minimal dark strip: name/tagline, nav, socials.
@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  // [PROPERTY: icons] — Logo + back-to-top icons.
  readonly LogoIcon = CodeXml;
  readonly ArrowUpIcon = ArrowUp;

  // Auto-updating copyright year.
  readonly year = new Date().getFullYear();

  // [PROPERTY: links] — Center nav links (must match section ids).
  readonly links: FooterLink[] = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  // [PROPERTY: socials] — Replace with your real profile URLs.
  readonly socials: FooterSocial[] = [
    { icon: Github, label: 'GitHub', url: '[YOUR GITHUB URL]' },
    { icon: Linkedin, label: 'LinkedIn', url: '[YOUR LINKEDIN URL]' },
    { icon: Mail, label: 'Email', url: 'mailto:[YOUR EMAIL]' },
  ];

  onNavClick(id: string, event: Event): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
