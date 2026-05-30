import { Component } from '@angular/core';
import {
  LucideAngularModule,
  LucideIconData,
  FolderOpen,
  ExternalLink,
  Github,
  Boxes,
  ShoppingCart,
  LayoutDashboard,
} from 'lucide-angular';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

interface Project {
  name: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  icon: LucideIconData;
}

// [COMPONENT: PortfolioComponent] — Responsive grid of rounded glass project cards.
@Component({
  selector: 'app-portfolio',
  imports: [LucideAngularModule, RevealOnScrollDirective],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class PortfolioComponent {
  // [PROPERTY: icons] — Header + CTA icons.
  readonly FolderOpenIcon = FolderOpen;
  readonly ExternalLinkIcon = ExternalLink;
  readonly GithubIcon = Github;

  // [PROPERTY: projects] — Duplicate a project object to add a card.
  readonly projects: Project[] = [
    {
      name: '[PROJECT 1 NAME]',
      description: '[PROJECT 1 DESCRIPTION] — A full-stack app solving a real problem with a polished UI and a robust API.',
      tech: ['[PROJECT 1 TECH STACK]', 'Angular', 'Node.js'],
      liveUrl: '[PROJECT 1 LIVE URL]',
      githubUrl: '[PROJECT 1 GITHUB URL]',
      icon: LayoutDashboard,
    },
    {
      name: '[PROJECT 2 NAME]',
      description: '[PROJECT 2 DESCRIPTION] — An e-commerce platform with secure payments and real-time inventory.',
      tech: ['TypeScript', 'REST API', 'PostgreSQL'],
      liveUrl: '[PROJECT 2 LIVE URL]',
      githubUrl: '[PROJECT 2 GITHUB URL]',
      icon: ShoppingCart,
    },
    {
      name: '[PROJECT 3 NAME]',
      description: '[PROJECT 3 DESCRIPTION] — A scalable SaaS dashboard with rich data visualizations.',
      tech: ['Angular', 'Express', 'Docker'],
      liveUrl: '[PROJECT 3 LIVE URL]',
      githubUrl: '[PROJECT 3 GITHUB URL]',
      icon: Boxes,
    },
  ];
}
